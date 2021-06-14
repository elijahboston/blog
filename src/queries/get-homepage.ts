import { gql } from '@apollo/client'

export const GET_HOMEPAGE = gql`
  query GetHomepage {
    allHomepage(limit: 1) {
      title
      subtitle
      primaryBlockContentRaw
    }
  }
`
