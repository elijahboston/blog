import { Layout } from "components/common/layout"
import { GetPosts_allPost } from "types/codegen/GetPosts"
import Link from "next/link"

export interface PostsViewProps {
  posts: Readonly<GetPosts_allPost[]>
}

export const PostsView: React.FC<PostsViewProps> = ({ posts }) => (
  <Layout>
    <ul>
      {posts.map((post, index) => (
        <li key={post.slug.current}>
          <Link href={`/posts/${post.slug.current}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h2 {
        font-weight: bold;
      }
    `}</style>
  </Layout>
)
