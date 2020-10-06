import { NextPage } from "next"
import { LayoutHomepage } from "components/layouts/LayoutHomepage"
import { Section } from "components/common/Section"
import SvgGithub from "components/icons/Github"
import SvgLinkedin from "components/icons/Linkedin"
import React from "react"
import { PrimaryAnchor, PrimaryAnchorProps } from "components/kit/PrimaryAnchor"
import { siteData } from "data/site"
import { PostProps } from "./posts/[slug]"
import { getPosts } from "util/get-posts"
import Link from "next/link"

const ContactLink: React.FC<PrimaryAnchorProps> = (props) => (
  <PrimaryAnchor className="border-gray-600 m-2" {...props} />
)

const Home: NextPage<{ posts: PostProps[] }> = ({ posts }) => (
  <LayoutHomepage>
    <p className="text-center py-6">
      I build websites and applications using React and Typescript.
    </p>

    {/* {posts && (
      <Section title="Recent Posts">
        <ul>
          {posts.map((post) => (
            <li>
              <Link prefetch href={"posts/" + post.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    )} */}
    {/* <Section title="Recent Work" backgroundColor="section-2">
      <ul className="list-disc list-inside">
        {recentWork.map((item) => (
          <li>
            <Anchor href={item.href}>{item.title}</Anchor>
          </li>
        ))}
      </ul>
    </Section> */}
    <Section title="Contact">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <ContactLink
          icon={<SvgGithub className="w-10 h-10 fill-current" />}
          href={siteData.contactInfo.github}
        >
          GitHub
        </ContactLink>
        <ContactLink
          icon={<SvgLinkedin className="w-10 h-10 fill-current" />}
          href={siteData.contactInfo.linkedIn}
        >
          LinkedIn
        </ContactLink>
      </div>
    </Section>
  </LayoutHomepage>
)

export default Home

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}
