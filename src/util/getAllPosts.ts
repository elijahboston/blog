import dirTree from 'directory-tree'
import { join } from 'path'
import { POST_DIR } from '~/constants'
import { getPostBySlug } from './getPostBySlug'

const postsDirectory = join(process.cwd(), POST_DIR)

const getPostsDirectorySlugs = () => {
  return dirTree(postsDirectory, { extensions: /\.md/ })
}

export const getAllPosts =  (fields: string[]) => {
    const slugs = getPostsDirectorySlugs()

    const posts = slugs.children
      .filter(({ type }) => type === 'file')
      .map((stats) => getPostBySlug(stats.name, fields))
      .sort((post1, post2) => (post1.date > post2.date ? 1 : -1))

    return posts
  }
)
