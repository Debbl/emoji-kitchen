import fs from 'node:fs'
import emojiData from './emojiData.json'
import type { EmojiData } from '~/types'

function toGoogleRequestEmoji(emojiCodepoint: string) {
  return emojiCodepoint
    .split('-')
    .map((part) => `u${part.toLowerCase()}`)
    .join('-')
}

let index = 0
const output: EmojiData = {}
type TEmojiData = Record<
  string,
  Array<{ leftEmoji: string; rightEmoji: string; date: string }>
>
Object.keys(emojiData as TEmojiData).forEach((leftKey) => {
  const leftList = (emojiData as TEmojiData)[leftKey]

  leftList.forEach((leftItem) => {
    const { leftEmoji, rightEmoji, date } = leftItem
    if (!output[leftKey]) {
      output[leftKey] = {}
    }
    index++
    const left = toGoogleRequestEmoji(leftEmoji)
    const right = toGoogleRequestEmoji(rightEmoji)
    output[leftKey][leftEmoji] = {
      url: `/${date}/${left}/${left}_${right}.png`,
    }
  })
})

console.log('sum: ', index)

fs.writeFileSync('./emojiData_p.json', JSON.stringify(output, null, 2))
