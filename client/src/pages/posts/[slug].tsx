import { NextPage } from "next"
import { Layout } from "components/common/layout"
import { PostView } from "views/post"
import { PostContainer } from "containers/post"
import { useRouter } from "next/dist/client/router"

interface PostProps {
  slug: string
}

const Post: NextPage<PostProps> = (props) => {
  const router = useRouter()
  const { slug } = router.query
  let currentSlug = Array.isArray(slug) ? slug[0] : slug

  return <PostContainer slug={currentSlug} />
}
export default Post
