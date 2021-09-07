import { GetStaticProps, NextPage } from 'next'
import { PostList } from '~/components/molecules/PostList'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { getAllPosts } from '~/util/getAllPosts'
import { getContentBySlug } from '~/util/getContentBySlug'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import markdownToHtml from '~/util/markdownToHtml'

const Home: NextPage<{ posts: PostMarkdown[]; aboutMe: string }> = ({
  posts,
  aboutMe
}) => {
  return (
    <BaseTemplate
      Content={
        <HomepageTemplate
          TopContent={<div dangerouslySetInnerHTML={{ __html: aboutMe }} />}
          Content={
            <div className='my-10'>
              <h2>Posts</h2>
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
  const aboutMe = await markdownToHtml(
    getContentBySlug('about-me', ['content']).content
  )

  return {
    props: {
      posts,
      aboutMe
    }
  }
}

export default Home
