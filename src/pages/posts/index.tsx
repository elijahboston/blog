import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { GetStaticProps, NextPage } from 'next'
import { getAllPosts } from '~/util/getAllPosts'
import { MarkdownRaw, PostMarkdown } from '~/util/getMarkdownBySlug'
import { PostList } from '~/components/molecules/PostList'

const Posts: NextPage<{ posts: PostMarkdown[]; aboutMe: MarkdownRaw }> = ({
  posts,
  aboutMe
}) => {
  return (
    <BaseTemplate
      Content={
        <HomepageTemplate
          Content={
            <div className='my-10'>
              <h1>Posts</h1>
              <PostList posts={posts} />
            </div>
          }
        />
      }
    />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllPosts(['title', 'tags', 'date', 'slug'])

  return {
    props: {
      posts
    }
  }
}

export default Posts
