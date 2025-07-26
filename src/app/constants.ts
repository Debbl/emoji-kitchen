import type { SupportedLocale } from '~/i18n/config'

// eslint-disable-next-line n/prefer-global/process
export const CWD = process.cwd()
// eslint-disable-next-line n/prefer-global/process
export const isDev = process.env.NODE_ENV === 'development'

export function getWebsite(lang?: SupportedLocale) {
  const isZh = lang === 'zh'

  return {
    title: isZh
      ? 'Emoji Kitchen - 创意表情符号组合工具 | 免费在线Emoji混合器'
      : 'Emoji Kitchen - Creative Emoji Combination Tool | Free Online Emoji Mixer',
    authors: [{ name: 'Brendan Dash', url: 'https://aiwan.run/' }],
    description: isZh
      ? 'Emoji Kitchen - 免费在线表情符号组合工具，支持92,437+种表情符号混合。创建独特的混合表情符号、自定义emoji贴纸，轻松保存和分享您喜爱的表情符号组合。无需注册，即开即用。'
      : 'Emoji Kitchen - Free online emoji combination tool, supporting 92,437+ emoji combinations. Create unique mixed emojis, custom emoji stickers, and easily save and share your favorite emoji combinations. No registration, just use it.',
    keywords: isZh
      ? [
          'emoji kitchen',
          '表情符号厨房',
          '混合表情符号',
          'emoji组合工具',
          '表情符号组合',
          '创意表情符号',
          '自定义emoji',
          '在线emoji工具',
          '表情符号生成器',
          'emoji混合器',
          'emoji fusion',
          'emoji mashup',
          '表情符号贴纸',
          'emoji stickers',
          '免费emoji工具',
          '在线表情符号制作',
          'emoji maker',
          '表情符号创作',
          'emoji art',
          '表情符号艺术',
        ]
      : [
          'emoji kitchen',
          'emoji combination tool',
          'emoji mixer',
          'emoji combination',
          'emoji creation',
          'emoji art',
          'emoji combination',
          'emoji creation',
          'emoji art',
          'emoji combination',
          'emoji creation',
          'emoji art',
          'emoji combination',
          'emoji creation',
          'emoji art',
        ],
    category: isZh ? '工具' : 'Tools',
    language: isZh ? 'zh' : 'en',
    creator: 'Brendan Dash',
    publisher: 'Brendan Dash',
    domain: isDev
      ? // eslint-disable-next-line n/prefer-global/process
        process.env.__NEXT_PRIVATE_ORIGIN!
      : isZh
        ? 'https://emoji.aiwan.run/zh'
        : 'https://emoji.aiwan.run',
    email: 'me@aiwan.run',
    social: {
      twitter: '@Debbl66',
      github: 'https://github.com/Debbl/emoji-kitchen',
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Emoji Kitchen',
      'description': isZh
        ? '免费在线表情符号组合工具，支持92,437+种表情符号混合'
        : 'Free online emoji combination tool, supporting 92,437+ emoji combinations.',
      'url': 'https://emoji.aiwan.run',
      'applicationCategory': isZh ? '工具' : 'Tools',
      'operatingSystem': 'Web Browser',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
      'author': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'creator': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'featureList': isZh
        ? [
            '支持92,437+种表情符号组合',
            '实时预览功能',
            '一键复制到剪贴板',
            '随机生成功能',
            '响应式设计',
            'PWA支持',
            '离线功能',
            '免费使用',
            '无需注册',
          ]
        : [
            'Support 92,437+ emoji combinations',
            'Real-time preview',
            'One-click copy to clipboard',
            'Random generation',
            'Responsive design',
            'PWA support',
            'Offline support',
            'Free to use',
            'No registration',
          ],
      'screenshot': 'https://emoji.aiwan.run/opengraph-image.png',
      'softwareVersion': '1.0.0',
      'downloadUrl': 'https://emoji.aiwan.run',
      'installUrl': 'https://emoji.aiwan.run',
    },
  }
}
