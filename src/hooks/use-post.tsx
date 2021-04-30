import { useQuery } from "@apollo/client"
import { GET_POST } from "~/queries/get-post"
import { GetPost, GetPostVariables } from "~/types/codegen/GetPost"

export const usePostQuery = ({ slug }: { slug: string }) => {
  const resp = useQuery<GetPost, GetPostVariables>(GET_POST, {
    variables: {
      slug,
    },
  })
  return resp
}
