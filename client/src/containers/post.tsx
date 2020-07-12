import gql from "graphql-tag"
import { PostsView } from "views/posts"
import { GetPost } from "types/codegen/GetPost"
import { useQuery } from "@apollo/client"
import Error from "next/error"
import { PostView } from "views/post"

const GET_POST = gql`
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

export interface PostContainerProps {
  slug: string
}

export const PostContainer: React.FC<PostContainerProps> = ({ slug }) => {
  const { data, error, loading } = useQuery<GetPost>(GET_POST, {
    variables: {
      slug,
    },
  })

  if (loading) {
    return <div></div>
  }

  if (!data.allPost.length || error) {
    return <Error statusCode={404} />
  }

  if (error) {
    return <Error statusCode={500} />
  }

  return <PostView post={data.allPost[0]} />
}
