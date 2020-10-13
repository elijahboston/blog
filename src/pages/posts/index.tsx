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
  return (
    <LayoutPost>
      <h1>Posts</h1>
      <ul>
        {data.allPost.map((item) => (
          <li key={item.slug.current}>
            <Anchor href={`${POST_PATH}/${item.slug.current}`}>
              {item.title}
            </Anchor>
          </li>
        ))}
      </ul>
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
