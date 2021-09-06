import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { PostTemplate } from '~/components/templates/PostTemplate'
import markdownToHtml from '~/util/markdownToHtml'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getQueryParameter } from '~/util/getQueryParameter'
import { Breadcrumbs } from '~/components/organisms/Breadcrumbs'
import { getAllPosts } from '~/util/getAllPosts'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { getPostBySlug } from '~/util/getPostBySlug'

const Post: NextPage<{ post: PostMarkdown }> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <BaseTemplate
      Content={
        <PostTemplate
          Title={post?.title}
          Breadcrumbs={<Breadcrumbs />}
          Content={post.content}
        />
      }
    />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getQueryParameter(params.slug)
  const post = await getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export default Post
