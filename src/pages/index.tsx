import { SITE_DATA } from '~/data/site'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { HomepageHero } from '~/components/organisms/HomepageHero'
import { GetServerSideProps, NextPage } from 'next'
import { withApollo } from '~/components/withApollo'
import { ssrGetPosts } from '~/generated/page'
import { POST_PATH } from '~/constants/site'
import Link from 'next/link'
import { Anchor } from '~/components/atoms/Anchor'
import { InlineAnchor } from '~/components/atoms/InlineAnchor'

const Home: NextPage<Record<string, unknown>> = () => {
  const { data } = ssrGetPosts.usePage()

  const formattedDate = (dateTime: string) => {
    const d = new Date(dateTime)
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
  }

  return (
    <BaseTemplate
      Header={<HomepageHero />}
      Content={
        <HomepageTemplate
          Content={
            <>
              <p className='text-body text-center text-bodyTextColor my-10'>
                {SITE_DATA.aboutMe}
              </p>

              <p className='text-body text-center text-bodyTextColor my-10'>
                You can find me on{' '}
                <InlineAnchor href={SITE_DATA.contactInfo.linkedIn}>
                  LinkedIn
                </InlineAnchor>{' '}
                or check out my code on{' '}
                <InlineAnchor href={SITE_DATA.contactInfo.github}>
                  Github
                </InlineAnchor>{' '}
                and{' '}
                <InlineAnchor href={SITE_DATA.contactInfo.codeSandbox}>
                  CodeSandbox
                </InlineAnchor>
                .
              </p>

              {data.allPost.map((item) => (
                <article key={item.slug.current} className='mb-10'>
                  <Link href={`${POST_PATH}/${item.slug.current}`}>
                    <Anchor href={`${POST_PATH}/${item.slug.current}`}>
                      <h2 className='text-h2 gradient-text bg-clip-text'>
                        {item.title}
                      </h2>
                    </Anchor>
                  </Link>
                  <div className='text-xs my-2 text-gray-500'>
                    Published{' '}
                    <time dateTime={item.publishedAt}>
                      {formattedDate(item.publishedAt)}
                    </time>
                  </div>

                  <p className='text-body text-gray-500'>{item.summary}</p>
                </article>
              ))}
            </>
          }
        />
      }
      Footer={<Footer />}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetPosts.getServerPage({}, ctx)
}

export default withApollo(ssrGetPosts.withPage(() => ({}))(Home))
