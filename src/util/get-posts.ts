import matter from 'gray-matter'

export const getPosts = () => {
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map((key) => context[key])

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')

      const value = values[index] as {default: any}

      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data
  })(require.context('../data/posts', true, /\.md$/))

  return posts
}
