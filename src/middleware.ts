/*
 * For more info see
 * https://nextjs.org/docs/app/building-your-application/routing/internationalization
 * */
import { NextResponse } from 'next/server'
import { linguiConfig } from '~/i18n/config'
import type { NextRequest } from 'next/server'

const { locales, sourceLocale } = linguiConfig

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  if (pathnameHasLocale) return

  request.nextUrl.pathname = `/${sourceLocale}${request.nextUrl.pathname}`

  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  // Match all pathnames except for
  // - ... if they start with `/api`, `/rpc`, `/_next` or `/_vercel`
  // - ... the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|rpc|_next|_vercel|.*\\..*).*)',
}
