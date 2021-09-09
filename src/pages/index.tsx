import { GetStaticProps, NextPage } from 'next'
import { HtmlFragment } from '~/components/atoms/HtmlFragment'
import { PostList } from '~/components/organisms/PostList'
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
          TopContent={<HtmlFragment html={aboutMe} />}
          Content={<PostList posts={posts} />}
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
