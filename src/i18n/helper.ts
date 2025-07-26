import { isBrowser } from '~/lib/is-browser'
import { linguiConfig } from './config'

export function getLang() {
  return isBrowser
    ? (window.document.documentElement.lang ?? linguiConfig.sourceLocale)
    : linguiConfig.sourceLocale
}
