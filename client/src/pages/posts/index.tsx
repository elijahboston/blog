import { getPosts } from "api"
import { NextPage } from "next"
import { PostsOrPages } from "@tryghost/content-api"
import { Layout } from "components/layout"
import Link from "next/link"

interface PostIndexProps {
  posts: void | PostsOrPages
}

const PostIndex: NextPage<PostIndexProps> = (props) =>
  props.posts && (
    <Layout>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
        <style jsx>{`
          h2 {
            font-weight: bold;
          }
        `}</style>
      </ul>
    </Layout>
  )

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

export default PostIndex
