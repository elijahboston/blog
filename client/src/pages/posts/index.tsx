import { NextPage } from "next"
import { PostsContainer } from "containers/posts"

interface PostProps {
  slug: string
}

const Post: NextPage<PostProps> = () => <PostsContainer />
export default Post
