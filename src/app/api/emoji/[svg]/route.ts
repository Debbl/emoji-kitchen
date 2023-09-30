const rawUrl =
  "https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u";

export async function GET(request: Request) {
  const url = request.url;
  const emoji = url.split("/").pop() ?? "";

  const emojiUrl = `${rawUrl}${emoji}`;
  const emojiRes = await fetch(emojiUrl, {
    cache: "force-cache",
  });
  const emojiBlob = await emojiRes.blob();

  const res = new Response(emojiBlob, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });

  return res;
}
