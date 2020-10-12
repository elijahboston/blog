import { GetPosts_allPost } from "types/codegen/GetPosts"
import BlockContent from "@sanity/block-content-to-react"
import { SANITY_PROJECT_ID, SANITY_DATASET } from "constants/api"

export interface PostProps {
  post: Readonly<GetPosts_allPost>
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          case "normal":
            return <p className="font-body text-xl my-4">{props.children}</p>
          default:
            return BlockContent.defaultSerializers.types.block(props)
        }
      },
    },
    list: (props) => {
      return (
        <ul className="list-disc list-inside m-4 font-body">
          {props.children}
        </ul>
      )
    },
    listItem: (props) => {
      return BlockContent.defaultSerializers.listItem(props)
    },
  }
  return (
    <>
      <h1 className="text-6xl font-display">{post.title}</h1>

      <BlockContent
        blocks={post.bodyRaw}
        projectId={SANITY_PROJECT_ID}
        dataset={SANITY_DATASET}
        serializers={serializers}
      />

      {post.author && <div className="">{post.author.name}</div>}
    </>
  )
}
