import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { HomepageHero } from '~/components/organisms/HomepageHero'
import { GetServerSideProps, NextPage } from 'next'
import { ssrGetHome, useGetHome } from '~/generated/page'
import { withApollo } from '~/components/withApollo'
import BlockContent from '@sanity/block-content-to-react'
import { SANITY_DATASET, SANITY_PROJECT_ID } from '~/constants/api'

const Home: NextPage<Record<string, unknown>> = () => {
  const { data } = useGetHome()
  const pageData = data.allHomepage[0]
  return (
    <BaseTemplate
      Header={
        <HomepageHero title={pageData?.title} subtitle={pageData?.subtitle} />
      }
      Content={
        <HomepageTemplate
          Content={
            <div className='my-10'>
              <BlockContent
                blocks={pageData?.primaryBlockContentRaw || {}}
                projectId={SANITY_PROJECT_ID}
                dataset={SANITY_DATASET}
              />
            </div>
          }
        />
      }
      Footer={<Footer />}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetHome.getServerPage({}, ctx)
}

export default withApollo(ssrGetHome.withPage(() => ({}))(Home))
