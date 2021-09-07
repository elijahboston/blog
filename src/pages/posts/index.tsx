import { GetStaticProps, NextPage } from 'next'
import { PostList } from '~/components/molecules/PostList'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { getAllPosts } from '~/util/getAllPosts'
import { MarkdownRaw, PostMarkdown } from '~/util/getMarkdownBySlug'

const Posts: NextPage<{ posts: PostMarkdown[]; aboutMe: MarkdownRaw }> = ({
  posts,
  aboutMe
}) => {
  return (
    <BaseTemplate
      meta={{
        title: 'post index'
      }}
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
  const posts = getAllPosts(['title', 'tags', 'date', 'slug'])

  return {
    props: {
      posts
    }
  }
}

export default Posts
