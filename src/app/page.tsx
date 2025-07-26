'use client'
import { useAtomValue } from 'jotai'
import { seoAtom } from '~/atoms/seo'
import { Kitchen } from '~/components/Kitchen'
import { SEO } from '~/components/SEO'

export default function Home() {
  const seo = useAtomValue(seoAtom)

  return (
    <main>
      <Kitchen />
      {seo && <SEO lang='zh' className='mx-auto mt-10 max-w-2xl' />}
    </main>
  )
}
