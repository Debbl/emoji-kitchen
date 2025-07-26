/* eslint-disable no-alert */
'use client'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/react/macro'
import * as clipboard from 'clipboard-polyfill'
import { useAtom, useSetAtom } from 'jotai'
import { BookMinusIcon, BookPlusIcon, LanguagesIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { emojiAtom } from '~/atoms/emoji'
import { langAtom } from '~/atoms/lang'
import { seoAtom } from '~/atoms/seo'
import { emojiData, knownSupportedEmoji } from '~/constants'
import Icon, {
  IconCarbonLogoGithub,
  IconFadDuplicate,
  IconFadRecord,
  IconFadXlrplug,
  IconRandom1dice,
  IconRandom2dice,
} from '~/icons'
import Cell from './Cell'
import { Button } from './ui/button'
import type { IIcon } from '~/icons'

const rawUrl = '/api/emoji'
const rootUrl = '/api/emojikitchen'

const getRawUrl = (v?: string) => {
  if (!v) return ''
  return `${`${rawUrl}/${v.split('-')[0].padStart(4, '0')}`}.svg`
}

export function Kitchen() {
  const [emoji, setEmoji] = useAtom(emojiAtom)
  const [current, setCurrent] = useState<'left' | 'right'>('left')
  const [toIcon, setToIcon] = useState<IIcon>(() => IconFadDuplicate)
  const [seo, setSeo] = useAtom(seoAtom)
  const setLang = useSetAtom(langAtom)
  const { i18n } = useLingui()

  const toUrl = useMemo(() => {
    if (!emoji.left || !emoji.right) return ''

    const url =
      emojiData?.[emoji.left]?.[emoji.right]?.url ??
      emojiData?.[emoji.right]?.[emoji.left]?.url
    if (!url) return ''

    return rootUrl + url
  }, [emoji])
  const allowList = useMemo(() => {
    if (!emoji.left && !emoji.right) return knownSupportedEmoji

    return Object.keys(
      emojiData?.[current === 'left' ? emoji.right : emoji.left] ?? {},
    )
  }, [current, emoji.left, emoji.right])

  const handleClick = (v: string) => {
    if (current === 'left') {
      setEmoji({ left: v, right: emoji.right })
      if (emoji.right === '') setCurrent('right')
    } else {
      setEmoji({ left: emoji.left, right: v })
      if (emoji.left === '') setCurrent('left')
    }
  }
  const handleRandom = (c: 'left' | 'right') => {
    const allowList = Object.keys(
      emojiData[c === 'left' ? emoji.right : emoji.left] ?? {},
    )
    const randomEmoji = allowList[Math.floor(Math.random() * allowList.length)]

    randomEmoji &&
      setEmoji((v) => ({
        ...v,
        [c]: randomEmoji,
      }))
  }

  const copyImg = async (imgUrl: string) => {
    const response = await fetch(imgUrl, {
      cache: 'force-cache',
    })
    const blob = await response.blob()

    try {
      const clipboardItem = new clipboard.ClipboardItem({ 'image/png': blob })
      await clipboard.write([clipboardItem])

      setToIcon(() => IconFadXlrplug)
      const id = setTimeout(() => {
        setToIcon(() => IconFadDuplicate)
        clearTimeout(id)
      }, 600)
      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        window.alert('部分浏览器可能无法复制图片，建议使用电脑端复制!')
      }
    } catch {
      window.alert('浏览器暂不支持复制命令')
    }
  }
  const random = () => {
    const left =
      Object.keys(emojiData)[
        Math.floor(Math.random() * Object.keys(emojiData).length)
      ]
    const right = Object.keys(emojiData[left])[
      Math.floor(Math.random() * Object.keys(emojiData[left]).length)
    ]
    setEmoji({ left, right })
  }
  const reset = () => {
    setEmoji({
      left: '',
      right: '',
    })
  }

  const handleLangChange = () => {
    const otherLang = i18n.locale === 'en' ? 'zh' : 'en'
    setLang(otherLang)
  }

  return (
    <div className='flex flex-col items-center select-none'>
      <div className='sticky top-4 z-10 inline-flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-6 md:p-8'>
        <div className='absolute right-1 bottom-1 flex items-center gap-x-2 md:right-3 md:bottom-3'>
          <Link
            href={`/${i18n.locale === 'en' ? 'zh' : '/'}`}
            onClick={handleLangChange}
          >
            <LanguagesIcon className='size-4' />
          </Link>
          <Link
            href='https://github.com/Debbl/emoji-kitchen/'
            data-umami-event='click-github-link'
            target='_blank'
            rel='noreferrer'
          >
            <Icon className='size-4' icon={IconCarbonLogoGithub} />
          </Link>
          <Button
            className='size-4'
            variant='outline'
            size='icon'
            onClick={() => setSeo(!seo)}
          >
            {seo ? <BookMinusIcon /> : <BookPlusIcon />}
          </Button>
        </div>

        <div className='flex gap-x-2 md:gap-x-4'>
          <Cell
            icon={IconRandom1dice}
            isCurrent={current === 'left'}
            rawUrl={getRawUrl(emoji.left)}
            onClick={() => setCurrent('left')}
            iconClick={() => handleRandom('left')}
          />
          <div className='mt-4 text-3xl'>+</div>
          <Cell
            icon={IconRandom1dice}
            isCurrent={current === 'right'}
            rawUrl={getRawUrl(emoji.right)}
            onClick={() => setCurrent('right')}
            iconClick={() => handleRandom('right')}
          />
          <div className='mt-4 text-3xl'>=</div>
          <Cell
            icon={toIcon}
            rawUrl={toUrl}
            iconClick={() => copyImg(toUrl)}
            onClick={() => copyImg(toUrl)}
          />
        </div>
        <div className='mt-3 flex items-center gap-x-2 md:gap-x-3'>
          <div
            onClick={random}
            className='flex cursor-pointer items-center rounded-xl border px-3 py-1'
          >
            <Icon className='text-2xl md:text-3xl' icon={IconRandom2dice} />
            <span>
              <Trans>Random</Trans>
            </span>
          </div>
          <div
            className='flex cursor-pointer items-center rounded-xl border px-3 py-1'
            onClick={reset}
          >
            <Icon className='text-2xl md:text-3xl' icon={IconFadRecord} />
            <span>
              <Trans>Reset</Trans>
            </span>
          </div>
        </div>
      </div>

      <div className='grid-cols-fill-12 mt-10 grid w-full gap-1 px-12 pb-12 md:gap-2'>
        {knownSupportedEmoji.map((v) => (
          <div key={v} className='flex justify-center'>
            <Image
              width={48}
              height={48}
              priority
              className={`z-0 h-12 w-12 ${
                allowList.includes(v)
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              alt={v}
              onClick={() => allowList.includes(v) && handleClick(v)}
              src={`${`${rawUrl}/${v.split('-')[0].padStart(4, '0')}`}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
