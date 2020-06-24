import { getPosts } from "api"
import { NextPage } from "next"
import { PostsOrPages } from "@tryghost/content-api"
import { Layout } from "components/layout"

interface HomeProps {}

const Home: NextPage<HomeProps> = () => <Layout>Welcome</Layout>

export default Home
