'use client'
import { Trans, useLingui } from '@lingui/react/macro'
import * as clipboard from 'clipboard-polyfill'
import { useSetAtom } from 'jotai'
import { CopyIcon, LanguagesIcon, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { parseAsString, useQueryStates } from 'nuqs'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { langAtom } from '~/atoms/lang'
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
  // const [emoji, setEmoji] = useAtom(emojiAtom)
  const [emoji, setEmoji] = useQueryStates(
    {
      left: parseAsString.withDefault('1fa84').withOptions({
        clearOnDefault: true,
      }),
      right: parseAsString.withDefault('1f349').withOptions({
        clearOnDefault: true,
      }),
    },
    {
      clearOnDefault: true,
      urlKeys: {
        left: 'l',
        right: 'r',
      },
    },
  )
  const [current, setCurrent] = useState<'left' | 'right'>('left')
  const [toIcon, setToIcon] = useState<IIcon>(() => IconFadDuplicate)
  const setLang = useSetAtom(langAtom)
  const { i18n, t } = useLingui()

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
  const downloadImg = async (blob: Blob) => {
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'emoji-kitchen.png'
    a.target = '_blank'
    a.click()
    URL.revokeObjectURL(url)
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

      downloadImg(blob)
    } catch {
      downloadImg(blob)
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
    setEmoji(null)
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
            variant='ghost'
            size='icon'
            onClick={() => {
              const url = window.location.href
              navigator.clipboard.writeText(url)
              toast.success(t`Copied to clipboard`, {
                position: 'top-center',
                description: t`your can share this emoji to your friends`,
              })
            }}
          >
            <LinkIcon />
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
              alt={`emoji-${v}`}
              onClick={() => allowList.includes(v) && handleClick(v)}
              src={`${`${rawUrl}/${v.split('-')[0].padStart(4, '0')}`}.svg`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
