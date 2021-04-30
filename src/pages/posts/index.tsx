import { NextPage } from "next"
import { initializeApollo } from "~/lib/apollo-client"
import { usePostsQuery } from "~/hooks/use-posts"
import { POST_PATH } from "~/constants/site"
import { GET_POSTS } from "~/queries/get-posts"
import { BaseTemplate } from "~/components/templates/BaseTemplate"
import { Footer } from "~/components/organisms/Footer"
import { StickyNav } from "~/components/organisms/StickyNav"
import { Anchor } from "~/components/atoms/Anchor"

const Post: NextPage<Record<string, unknown>> = () => {
  const { data } = usePostsQuery()
  const formattedDate = (dateTime: string) => {
    const d = new Date(dateTime)
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
  }

  return (
    <BaseTemplate
      StickyNav={<StickyNav />}
      Content={
        <>
          <h1>Posts</h1>
          {data.allPost.map((item) => (
            <article key={item.slug.current} className="py-3">
              <Anchor href={`${POST_PATH}/${item.slug.current}`}>
                {item.title}
              </Anchor>
              <div className="text-xs text-gray-500">
                Published{" "}
                <time dateTime={item.publishedAt}>
                  {formattedDate(item.publishedAt)}
                </time>
              </div>

              <p>{item.summary}</p>
            </article>
          ))}
        </>
      }
      Footer={<Footer />}
    />
  )
}

export default Post

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_POSTS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    // Revalidate: 1,
  }
}
