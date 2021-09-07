import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Tag } from '~/components/atoms/Tag'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { PostTemplate } from '~/components/templates/PostTemplate'
import { formatDate } from '~/util/formatDate'
import { getAllPosts } from '~/util/getAllPosts'
import { PostMarkdown } from '~/util/getMarkdownBySlug'
import { getPostBySlug } from '~/util/getPostBySlug'
import { getQueryParameter } from '~/util/getQueryParameter'
import markdownToHtml from '~/util/markdownToHtml'

const Post: NextPage<{ post: PostMarkdown }> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <BaseTemplate
        meta={{
          title: post.title,
          description: post.summary
        }}
        Content={
          <PostTemplate
            Hero={
              <div className='border-secondary border-b border-dotted'>
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
              </div>
            }
            Content={
              <article
                className='pt-4 mx-4'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            }
          />
        }
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getQueryParameter(params.slug)
  const post = getPostBySlug(slug, [
    'title',
    'summary',
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
  const posts = getAllPosts(['slug'])

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
