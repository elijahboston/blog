import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export interface MarkdownRaw {
  slug?: string
  content?: string
}

export interface PostMarkdown extends MarkdownRaw {
  title?: string
  summary?: string
  date?: string
  tags?: string[]
}

export const getMarkdownBySlug = (
  path: string,
  slug: string,
  fields: string[]
) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(path, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: MarkdownRaw = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (field === 'tags' && data[field]) {
      items[field] = data[field].split('|')
    } else if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
