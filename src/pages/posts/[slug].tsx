import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import { PostContent } from '~/components/organisms/PostContent'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { PostTemplate } from '~/components/templates/PostTemplate'
import { GetServerSideProps } from 'next'
import { PageGetPostComp, ssrGetPost } from '~/generated/page'
import { withApollo } from '~/components/withApollo'
import Error from 'next/error'
import { Nav } from '~/components/organisms/Nav'
import { PageTitle } from '~/components/atoms/PageTitle'

SyntaxHighlighter.registerLanguage('javascript', js)

const PostPage: PageGetPostComp = ({ data, error }) => {
  if (error || !data || (data && data.allPost && !data.allPost.length)) {
    return <Error statusCode={404} />
  }

  const post = data.allPost[0]

  return (
    <BaseTemplate
      StickyNav={<Nav />}
      Content={
        <PostTemplate
          Content={
            <>
              <PageTitle>{post.title}</PageTitle>
              <PostContent bodyRaw={post.bodyRaw} />
            </>
          }
        />
      }
      Footer={<Footer />}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx

  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug || null

  const res = await ssrGetPost.getServerPage({
    variables: {
      slug
    }
  })

  if (res.props.error || !res.props.data?.allPost?.length) {
    return {
      notFound: true
    }
  }
  return res
}

export default withApollo(
  ssrGetPost.withPage((arg) => ({
    variables: { slug: arg?.query?.slug?.toString() }
  }))(PostPage)
)
