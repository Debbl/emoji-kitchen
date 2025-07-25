import withSerwistInit from '@serwist/next'
import AutoImport from 'unplugin-auto-import/webpack'
import type { NextConfig } from 'next'

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
})

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  poweredByHeader: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: '@lingui/loader',
      },
    })

    config.plugins.push(
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        imports: [
          'react',
          {
            twl: ['cn'],
          },
        ],
        dts: true,
      }),
    )

    return config
  },
}

export default withSerwist(nextConfig)
