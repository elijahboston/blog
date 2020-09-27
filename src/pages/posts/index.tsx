import { NextPage } from "next"
import matter from "gray-matter"
import React from "react"
import { PostProps } from "./[slug]"
import { LayoutPost } from "components/layouts/LayoutPost"
import { Anchor } from "components/kit/Anchor"

interface PostIndexProps {
  allPosts: PostProps[]
}

const Post: NextPage<PostIndexProps> = (props) => {
  return (
    <LayoutPost>
      <h1>Posts</h1>
      <ul>
        {props.allPosts.map((item) => (
          <li key={item.frontmatter.slug}>
            <Anchor href={`posts/${item.frontmatter.slug}`}>
              {item.frontmatter.title}
            </Anchor>
          </li>
        ))}
      </ul>
    </LayoutPost>
  )
}

export default Post

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    console.log("CONTEXT", context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".")

      const value = values[index] as { default: any }

      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context("../../data/posts", true, /\.md$/))

  return {
    props: {
      allPosts: posts,
    },
  }
}
