import { NextPage } from "next"
import { Layout } from "components/common/Layout"
import { useRouter } from "next/dist/client/router"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import glob from "glob"

interface PostProps {
  slug: string
  frontmatter: {
    title: string
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
    <Layout>
      <article>
        <h1 className="text-6xl font-display">{frontmatter.title}</h1>

        <ReactMarkdown source={props.markdownBody} />

        {frontmatter.author && <div className="">{frontmatter.author}</div>}
      </article>
    </Layout>
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
  const blogs = glob.sync("data/posts/**/*.md")

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
