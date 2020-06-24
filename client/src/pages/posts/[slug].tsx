import { getPost } from "api"
import { NextPage } from "next"
import { PostOrPage } from "@tryghost/content-api"
import { Layout } from "components/layout"

interface PostProps {
  post: void | PostOrPage
}

const Post: NextPage<PostProps> = (props) => {
  const renderedHtml = (html: string) => ({ __html: html })

  return (
    props.post && (
      <Layout>
        <div dangerouslySetInnerHTML={renderedHtml(props.post.html)} />
      </Layout>
    )
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  const post = await getPost(slug)
  return { props: { post } }
}

export default Post
