import { GetServerSideProps, NextPage } from 'next'
import { POST_PATH } from '~/constants/site'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { Anchor } from '~/components/atoms/Anchor'
import { ssrGetPosts } from '~/generated/page'
import { withApollo } from '~/components/withApollo'
import { Nav } from '~/components/organisms/Nav'
import Link from 'next/link'

const Post: NextPage<Record<string, unknown>> = () => {
  const { data } = ssrGetPosts.usePage()
  const formattedDate = (dateTime: string) => {
    const d = new Date(dateTime)
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
  }

  return (
    <BaseTemplate
      StickyNav={<Nav />}
      Content={
        <>
          <h1 className='text-hero my-10 text-bodyTextColor'>Posts</h1>
          {data.allPost.map((item) => (
            <article key={item.slug.current} className='mb-10'>
              <Link href={`${POST_PATH}/${item.slug.current}`}>
                <Anchor href={`${POST_PATH}/${item.slug.current}`}>
                  <h2 className='text-h2'>{item.title}</h2>
                </Anchor>
              </Link>
              <div className='text-xs mb-5 text-gray-500'>
                Published{' '}
                <time dateTime={item.publishedAt}>
                  {formattedDate(item.publishedAt)}
                </time>
              </div>

              <p className='text-body text-bodyTextColor'>{item.summary}</p>
            </article>
          ))}
        </>
      }
      Footer={<Footer />}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetPosts.getServerPage({}, ctx)
}

export default withApollo(ssrGetPosts.withPage(() => ({}))(Post))
