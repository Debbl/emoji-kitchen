import { atomWithStorage } from 'jotai/utils'

export const emojiAtom = atomWithStorage<{ left: string; right: string }>(
  'emoji',
  {
    left: '1fa84',
    right: '1f349',
  },
)
