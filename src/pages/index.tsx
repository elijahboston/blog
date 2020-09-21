import { NextPage } from "next"
import { Layout } from "components/common/Layout"
import { Section } from "components/common/Section"
import SvgGithub from "components/icons/Github"
import SvgLinkedin from "components/icons/Linkedin"
import React from "react"
import { ProfileHeader } from "components/common/ProfileHeader"
import { PrimaryAnchor, PrimaryAnchorProps } from "components/kit/PrimaryAnchor"
import { contactInfo } from "data/contact"
import { recentWork } from "data/recent-work"
import { Anchor } from "components/kit/Anchor"

const ContactLink: React.FC<PrimaryAnchorProps> = (props) => (
  <PrimaryAnchor className="border-gray-600 md:mr-4" {...props} />
)

const Home: NextPage<{}> = () => (
  <Layout>
    <div className="">
      <Section title="About" backgroundColor="section-1">
        <p>I build sites using modern web technologies.</p>
      </Section>
      <Section title="Recent Work" backgroundColor="section-2">
        <ul className="list-disc list-inside">
          {recentWork.map((item) => (
            <li>
              <Anchor href={item.href}>{item.title}</Anchor>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Contact" backgroundColor="section-3">
        <ContactLink
          icon={<SvgGithub className="w-10 h-10 fill-current" />}
          href={contactInfo.github}
        >
          GitHub
        </ContactLink>
        <ContactLink
          icon={<SvgLinkedin className="w-10 h-10 fill-current" />}
          href={contactInfo.linkedIn}
        >
          LinkedIn
        </ContactLink>
      </Section>
    </div>
  </Layout>
)

export default Home

// export async function getStaticProps() {
//   const config = await import(`../data/config.json`)

//   return {
//     props: {
//       recentWork: config.default,
//     },
//   }
// }
