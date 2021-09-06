import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '~/util/getAllPosts'
import { MarkdownRaw, PostMarkdown } from '~/util/getMarkdownBySlug'

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
  const posts = await getAllPosts(['title', 'date', 'slug'])

  return {
    props: {
      posts
    }
  }
}

export default Posts
