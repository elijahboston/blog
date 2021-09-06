import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { PostTemplate } from '~/components/templates/PostTemplate'
import markdownToHtml from '~/util/markdownToHtml'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getQueryParameter } from '~/util/getQueryParameter'
import { getAllPosts } from '~/util/getAllPosts'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { getPostBySlug } from '~/util/getPostBySlug'
import { formatDate } from '~/util/formatDate'
import { Tag } from '~/components/atoms/Tag'

const Post: NextPage<{ post: PostMarkdown }> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <BaseTemplate
      Content={
        <PostTemplate
          Hero={
            <>
              <h1 className='my-2'>{post.title}</h1>
              {post.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {post.date && (
                <h5 className='my-2'>
                  Posted on{' '}
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </h5>
              )}
            </>
          }
          Content={
            <article
              className='border-secondary border-t border-dotted pt-4'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          }
        />
      }
    />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getQueryParameter(params.slug)
  const post = await getPostBySlug(slug, [
    'title',
    'tags',
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
