const rootUrl = "https://www.gstatic.com/android/keyboard/emojikitchen";

export async function GET({ url }: Request) {
  const emojiKitchen = url.split("/").slice(5).join("/");
  const emojiUrl = `${rootUrl}/${emojiKitchen}`;

  const emojiRes = await fetch(emojiUrl, {
    cache: "force-cache",
  });
  const emojiBlob = await emojiRes.blob();

  const res = new Response(emojiBlob, {
    headers: {
      "Content-Type": "image/png",
    },
  });

  return res;
}