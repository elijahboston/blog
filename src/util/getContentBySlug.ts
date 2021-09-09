import { join } from 'path'
import { CONTENT_DIR } from '~/constants'
import { getMarkdownBySlug } from './getMarkdownBySlug'

const contentDirectory = join(process.cwd(), CONTENT_DIR)

export const getContentBySlug = (slug: string, fields = []) =>
  getMarkdownBySlug(contentDirectory, slug, fields)
