// eslint-disable-next-line n/prefer-global/process
export const CWD = process.cwd()
// eslint-disable-next-line n/prefer-global/process
export const isDev = process.env.NODE_ENV === 'development'

export const WEBSITE = {
  title: 'Emoji Kitchen',
  authors: [{ name: 'Brendan Dash (Debbl)', url: 'https://aiwan.run/' }],
  description:
    'Emoji Kitchen - Create unique emoji combinations and stickers by mixing different emojis. Generate custom emoji stickers, explore creative emoji mashups, and easily save and share your favorite emoji combinations. Free online emoji mixing tool.',

  domain: isDev
    ? // eslint-disable-next-line n/prefer-global/process
      process.env.__NEXT_PRIVATE_ORIGIN!
    : 'https://emoji.aiwan.run',
  email: 'me@aiwan.run',
}
