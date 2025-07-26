import { useLingui } from '@lingui/react'
import NextLink from 'next/link'
import {
  usePathname as useNextPathname,
  useRouter as useNextRouter,
} from 'next/navigation'
import { linguiConfig } from './config'
import { getLang } from './helper'
import type {
  NavigateOptions,
  PrefetchOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import type { LinkProps } from 'next/link'

function createNavigation() {
  const Link = (props: LinkProps) => {
    const { href } = props
    let pathname = ''
    if (typeof href === 'object') {
      pathname = href.pathname ?? ''
    } else {
      pathname = href
    }

    const { i18n } = useLingui()
    const hasLocale = linguiConfig.locales.some((locale) =>
      pathname?.startsWith(`/${locale}`),
    )
    if (!hasLocale && i18n.locale !== linguiConfig.sourceLocale) {
      pathname = `/${i18n.locale}${pathname}`
    }

    return (
      <NextLink
        {...props}
        href={
          typeof href === 'object'
            ? {
                ...href,
                pathname,
              }
            : pathname
        }
      />
    )
  }

  const usePathname = () => {
    const pathname = useNextPathname()

    const locale = linguiConfig.locales.find((locale) =>
      pathname?.startsWith(`/${locale}`),
    )
    return locale ? pathname.slice(locale.length + 1) : pathname
  }

  const useRouter = () => {
    const router = useNextRouter()

    return useMemo(() => {
      function createHandler<
        Options extends NavigateOptions | PrefetchOptions,
        Fn extends (href: string, options?: Options) => void,
      >(fn: Fn) {
        return function handler(href: string, options?: Options): void {
          let finalHref = href
          const hasLocale = linguiConfig.locales.some((locale) =>
            href?.startsWith(`/${locale}`),
          )
          if (!hasLocale) {
            const lang = getLang()
            finalHref = `/${lang}${href}`
          }

          fn(finalHref, options)
        }
      }

      return {
        ...router,
        push: createHandler<NavigateOptions, typeof router.push>(router.push),
        replace: createHandler<NavigateOptions, typeof router.replace>(
          router.replace,
        ),
        prefetch: createHandler<PrefetchOptions, typeof router.prefetch>(
          router.prefetch,
        ),
      }
    }, [router])
  }

  return {
    Link,
    usePathname,
    useRouter,
  }
}

export const { Link, usePathname, useRouter } = createNavigation()
