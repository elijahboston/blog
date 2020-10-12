import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import { LayoutHomepage } from "components/layouts/LayoutHomepage"
import { useRouter } from "next/dist/client/router"
import matter from "gray-matter"
import React from "react"
import { LayoutPost } from "components/layouts/LayoutPost"
import { gql, useQuery } from "@apollo/client"
import { GetPost } from "types/codegen/GetPost"
import { Post } from "components/Post"
import { initializeApollo } from "lib/apollo-client"
import { usePostQuery } from "hooks/use-post"
import { getQueryParam } from "util/get-query-param"
import { GET_POST } from "queries/get-post"

const PostPage: NextPage<{}> = () => {
  const { query } = useRouter()
  const { slug } = query

  const { data } = usePostQuery({ slug: getQueryParam(slug) })

  return (
    <LayoutPost>
      <Post post={data} />
    </LayoutPost>
  )
}

export default PostPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const { slug } = ctx.query

  const { data, error } = await apolloClient.query({
    query: GET_POST,
    variables: {
      slug: getQueryParam(slug),
    },
  })

  if (!data || error) {
    ctx.res.statusCode = 404
    ctx.res.end()
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    //revalidate: 1,
  }
}
