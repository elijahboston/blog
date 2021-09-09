import Link from 'next/link'
import { formatDate } from '~/util/formatDate'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { Tag } from '../atoms/Tag'

export interface PostListItemProps extends PostMarkdown {}

export const PostPreview: React.FC<PostListItemProps> = (props) => {
  const post = props
  return (
    <>
      <h3>
        <Link href={`/posts/${post?.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h3>
      <div className='flex mt-2 mb-4'>
        {post.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <time className='text-textSecondary'>{formatDate(post.date)}</time>
      </div>
    </>
  )
}
