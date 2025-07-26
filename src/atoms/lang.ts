import { atomWithStorage } from 'jotai/utils'
import type { SupportedLocale } from '~/i18n/config'

export const langAtom = atomWithStorage<SupportedLocale>('lang', 'en')
