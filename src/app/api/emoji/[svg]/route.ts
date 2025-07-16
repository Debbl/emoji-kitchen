const rawUrl =
  'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u'

export async function GET({ url }: Request) {
  const emoji = url.split('/').pop() ?? ''
  const emojiUrl = `${rawUrl}${emoji}`

  const emojiRes = await fetch(emojiUrl, {
    cache: 'force-cache',
  })
  const emojiBlob = await emojiRes.blob()

  const response = new Response(emojiBlob, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })

  return response
}
