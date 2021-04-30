import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from '~/components/lib/apollo-client'
import { usePostQuery } from '~/hooks/use-post'
import { getQueryParameter } from '~/util/get-query-param'
import { GET_POST } from '~/queries/get-post'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import { PostContent } from '~/components/organisms/PostContent'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { PostTemplate } from '~/components/templates/PostTemplate'
import { StickyNav } from '~/components/organisms/StickyNav'
import { GetServerSidePropsContext, NextPage } from 'next'

SyntaxHighlighter.registerLanguage('javascript', js)

const PostPage: NextPage<Record<string, unknown>> = () => {
  const { query } = useRouter()
  const { slug } = query

  const { data } = usePostQuery({ slug: getQueryParameter(slug) })
  const post = data.allPost[0]

  return (
    <BaseTemplate
      StickyNav={<StickyNav />}
      Content={
        <PostTemplate
          Content={
            <>
              <h1 className='font-display'>{post.title}</h1>
              {/* {post.author && <div className="py-6">By {post.author.name}</div>} */}
              <PostContent bodyRaw={post.bodyRaw} />
            </>
          }
        />
      }
      Footer={<Footer />}
    />
  )
}

export default PostPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const { slug } = ctx.query

  const { data, error } = await apolloClient.query({
    query: GET_POST,
    variables: {
      slug: getQueryParameter(slug)
    }
  })

  if (!data || error) {
    ctx.res.statusCode = 404
    ctx.res.end()
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
    // Revalidate: 1,
  }
}
