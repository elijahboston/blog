import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import markdownToHtml from '~/util/markdownToHtml'
import { getAllPosts } from '~/util/getAllPosts'
import { getContentBySlug } from '~/util/getContentBySlug'
import { PostMarkdown, MarkdownRaw } from '~/util/getMarkdownBySlug'

const Home: NextPage<{ posts: PostMarkdown[]; aboutMe: string }> = ({
  posts,
  aboutMe
}) => {
  return (
    <BaseTemplate
      Content={
        <HomepageTemplate
          TopContent={<p dangerouslySetInnerHTML={{ __html: aboutMe }} />}
          Content={
            <div className='my-10'>
              <h2>Posts</h2>
              {posts.map((post) => (
                <h2 key={post.slug}>
                  <Link href={`/posts/${post?.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
              ))}
            </div>
          }
        />
      }
    />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [posts, aboutMe] = await Promise.all([
    getAllPosts(['title', 'date', 'slug']),
    getContentBySlug('about-me', ['content']).then((md) =>
      markdownToHtml(md.content)
    )
  ])

  return {
    props: {
      posts,
      aboutMe
    }
  }
}

export default Home
