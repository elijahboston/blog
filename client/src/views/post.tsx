import { Layout } from "components/common/layout"
import { GetPosts_allPost } from "types/codegen/GetPosts"
import BlockContent from "@sanity/block-content-to-react"
import { SANITY_PROJECT_ID, SANITY_DATASET } from "config/api"

export interface PostViewProps {
  post: Readonly<GetPosts_allPost>
}

export const PostView: React.FC<PostViewProps> = ({ post }) => (
  <Layout>
    <h1>{post.title}</h1>
    {post.author && <h3>{post.author.name}</h3>}
    <BlockContent
      blocks={post.bodyRaw}
      projectId={SANITY_PROJECT_ID}
      dataset={SANITY_DATASET}
    />
  </Layout>
)
