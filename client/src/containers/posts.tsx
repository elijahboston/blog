import React from "react"
import gql from "graphql-tag"
import { PostsView } from "views/posts"
import { GetPosts } from "types/codegen/GetPosts"
import Error from "next/error"
import { useQuery } from "@apollo/client"

const GET_POSTS = gql`
  query GetPosts {
    allPost {
      title
      slug {
        current
      }
      publishedAt
      author {
        name
      }
      bodyRaw
    }
  }
`

export const PostsContainer: React.FC<{}> = () => {
  const { data, loading, error } = useQuery<GetPosts>(GET_POSTS)

  if (loading) {
    return <div></div>
  }

  if (!data.allPost || error) {
    return <Error statusCode={404} />
  }

  if (error) {
    return <Error statusCode={500} />
  }

  return <PostsView posts={data.allPost} />
}
