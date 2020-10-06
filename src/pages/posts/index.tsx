import { NextPage } from "next"
import matter from "gray-matter"
import React from "react"
import { PostProps } from "./[slug]"
import { LayoutPost } from "components/layouts/LayoutPost"
import { Anchor } from "components/kit/Anchor"
import { getPosts } from "util/get-posts"

interface PostIndexProps {
  allPosts: PostProps[]
}

const Post: NextPage<PostIndexProps> = (props) => {
  return (
    <LayoutPost>
      <h1>Posts</h1>
      <ul>
        {props.allPosts.map((item) => (
          <li key={item.slug}>
            <Anchor href={`posts/${item.slug}`}>
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
  return {
    props: {
      allPosts: getPosts(),
    },
  }
}
