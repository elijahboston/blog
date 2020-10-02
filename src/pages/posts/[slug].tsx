import { NextPage } from "next"
import { LayoutHomepage } from "components/layouts/LayoutHomepage"
import { useRouter } from "next/dist/client/router"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import glob from "glob"
import React from "react"
import { LayoutPost } from "components/layouts/LayoutPost"

export interface PostProps {
  slug: string
  frontmatter: {
    title: string
    slug: string
    author: string
    datePosted: string
    dateUpdated?: string
  }
  markdownBody: string
}

const Post: NextPage<PostProps> = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const { frontmatter } = props
  let currentSlug = Array.isArray(slug) ? slug[0] : slug

  return (
    <LayoutPost>
      <article>
        <h1 className="text-6xl font-display">{frontmatter.title}</h1>

        <ReactMarkdown source={props.markdownBody} />

        {frontmatter.author && <div className="">{frontmatter.author}</div>}
      </article>
    </LayoutPost>
  )
}

export default Post

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../data/posts/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      console.log("SLUG:", slug)

      return slug
    })
    return data
  })(require.context("../../data/posts", true, /\.md$/))

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
