// @ts-nocheck
import fs from "node:fs";
import emojiData from "./emojiData.json";
import type { EmojiData } from "~/types";

function toGoogleRequestEmoji(emojiCodepoint: string) {
  return emojiCodepoint
    .split("-")
    .map((part) => `u${part.toLowerCase()}`)
    .join("-");
}

let index = 0;
const output: EmojiData = {};
Object.keys(emojiData).forEach((leftKey) => {
  const leftList = emojiData[leftKey];
  leftList.forEach((leftItem) => {
    const { leftEmoji, rightEmoji, date } = leftItem;
    if (!output[leftKey]) {
      output[leftKey] = {};
    }
    index++;
    const left = toGoogleRequestEmoji(leftEmoji);
    const right = toGoogleRequestEmoji(rightEmoji);
    output[leftKey][leftEmoji] = {
      url: `/${date}/${left}/${left}_${right}.png`,
    };
  });
});

console.log(index);

fs.writeFileSync("emojiData_p.json", JSON.stringify(output, null, 2));
