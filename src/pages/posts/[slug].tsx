import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import { PostContent } from '~/components/organisms/PostContent'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { PostTemplate } from '~/components/templates/PostTemplate'
import { StickyNav } from '~/components/organisms/StickyNav'
import { GetServerSideProps } from 'next'
import { PageGetPostComp, ssrGetPost } from '~/generated/page'
import { withApollo } from '~/components/withApollo'
import Error from 'next/error'

SyntaxHighlighter.registerLanguage('javascript', js)

const PostPage: PageGetPostComp = ({ data, error }) => {
  if (error || !data || (data && data.allPost && !data.allPost.length)) {
    return <Error statusCode={404} />
  }

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx

  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug || null
  console.log('SLUG', slug)

  const res = await ssrGetPost.getServerPage({
    variables: {
      slug
    }
  })

  console.log('resp', res.props.data.allPost[0])

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
