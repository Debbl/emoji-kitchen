const rootUrl = 'https://www.gstatic.com/android/keyboard/emojikitchen'

export async function GET({ url }: Request) {
  const emojiKitchen = url.split('/').slice(5).join('/')
  const emojiUrl = `${rootUrl}/${emojiKitchen}`

  const emojiRes = await fetch(emojiUrl, {
    cache: 'force-cache',
  })
  const emojiBlob = await emojiRes.blob()

  const response = new Response(emojiBlob, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })

  return response
}
