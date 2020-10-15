import { gql } from "@apollo/client"

export const GET_POSTS = gql`
  query GetPosts {
    allPost {
      _id
      title
      slug {
        current
      }
      publishedAt
      author {
        name
      }
      summary
    }
  }
`
