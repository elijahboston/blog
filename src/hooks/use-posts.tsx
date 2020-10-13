import { useQuery } from "@apollo/client"
import { GET_POSTS } from "queries/get-posts"
import { GetPosts } from "types/codegen/GetPosts"

export const usePostsQuery = () => {
  const resp = useQuery<GetPosts, {}>(GET_POSTS)
  return resp
}
