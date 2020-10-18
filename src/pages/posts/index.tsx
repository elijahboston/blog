import { NextPage } from "next"
import React from "react"
import { LayoutPost } from "components/layouts/LayoutPost"
import { Anchor } from "components/kit/Anchor"
import { initializeApollo } from "lib/apollo-client"
import { usePostsQuery } from "hooks/use-posts"
import { POST_PATH } from "constants/site"
import { GET_POSTS } from "queries/get-posts"

const Post: NextPage<{}> = () => {
  const { data } = usePostsQuery()
  const formattedDate = (dateTime: string) => {
    const d = new Date(dateTime)
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
  }
  return (
    <LayoutPost>
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
    </LayoutPost>
  )
}

export default Post

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_POSTS,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    //revalidate: 1,
  }
}
