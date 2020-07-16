import { Layout } from "components/common/layout"
import { GetPosts_allPost } from "types/codegen/GetPosts"
import BlockContent from "@sanity/block-content-to-react"
import { SANITY_PROJECT_ID, SANITY_DATASET } from "config/api"

export interface PostViewProps {
  post: Readonly<GetPosts_allPost>
}

export const PostView: React.FC<PostViewProps> = ({ post }) => {
  const serializers = {
    types: {
      block: (props) => {
        console.log("props", props)
        switch (props.node.style) {
          case "normal":
            return <p className="font-serif text-base">{props.children}</p>
          default:
            return BlockContent.defaultSerializers.types.block(props)
        }
      },
    },
  }
  return (
    <Layout>
      <h1>{post.title}</h1>
      {post.author && <h3>{post.author.name}</h3>}
      <BlockContent
        blocks={post.bodyRaw}
        projectId={SANITY_PROJECT_ID}
        dataset={SANITY_DATASET}
        serializers={serializers}
      />
    </Layout>
  )
}
