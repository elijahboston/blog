import fs from 'fs'
import { join } from 'path'
import { POST_DIR } from '~/constants'
import { getPostBySlug } from './getPostBySlug'

const postsDirectory = join(process.cwd(), POST_DIR)

const getPostsDirectorySlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getAllPosts = async (fields: string[]) => {
  const slugs = getPostsDirectorySlugs()
  const posts = Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  ).then((
    results // sort posts by date in descending order
  ) => results.sort((post1, post2) => (post1.date > post2.date ? -1 : 1)))
  return posts
}
