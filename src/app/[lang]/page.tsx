'use client'
import { useLingui } from '@lingui/react'
import { useAtomValue } from 'jotai'
import { langAtom } from '~/atoms/lang'
import { seoAtom } from '~/atoms/seo'
import { Kitchen } from '~/components/Kitchen'
import { SEO } from '~/components/SEO'
import { useEffectEvent } from '~/hooks/use-effect-event'
import { useIsHydrated } from '~/hooks/use-is-hydrated'

export default function Home() {
  const seo = useAtomValue(seoAtom)
  const { i18n } = useLingui()
  const lang = useAtomValue(langAtom)
  const isHydrated = useIsHydrated()

  const handleInitLang = useEffectEvent(() => {
    if (!isHydrated || i18n.locale === lang) return

    const pathname = lang === 'en' ? '/' : `/${lang}`
    window.location.replace(pathname)
  })

  useEffect(() => {
    handleInitLang()
  }, [isHydrated, handleInitLang])

  return (
    <main>
      <Kitchen />
      {seo && <SEO className='mx-auto mt-10 max-w-2xl' />}
    </main>
  )
}
