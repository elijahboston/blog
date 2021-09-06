import Link from 'next/link'
import { formatDate } from '~/util/formatDate'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { Tag } from '../atoms/Tag'

export interface PostListProps {
  posts: PostMarkdown[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className='no-underline m-0 p-0'>
      {posts.map((post) => (
        <li key={post.slug} className='flex flex-col'>
          <h3>
            <Link href={`/posts/${post?.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h3>
          <div className='flex'>
            {post.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <time className='text-textSecondary'>{formatDate(post.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  )
}
