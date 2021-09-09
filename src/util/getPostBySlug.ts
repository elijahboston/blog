import { join } from 'path'
import { POST_DIR } from '~/constants'
import { getMarkdownBySlug, PostMarkdown } from './getMarkdownBySlug'

const postsDirectory = join(process.cwd(), POST_DIR)

export const getPostBySlug = (slug: string, fields = []) =>
  getMarkdownBySlug(postsDirectory, slug, fields) as PostMarkdown
