import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { PostPreview } from '../molecules/PostPreview'

export interface PostListProps {
  posts: PostMarkdown[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className='my-10'>
      <h1>Posts</h1>
      <ul className='no-underline m-0 p-0'>
        {posts.map((post) => (
          <li key={post.slug} className='flex flex-col ml-4'>
            <PostPreview {...post} />
          </li>
        ))}
      </ul>
    </div>
  )
}
