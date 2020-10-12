import { gql } from "@apollo/client"

export const GET_POST = gql`
  query GetPost($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      _id
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
