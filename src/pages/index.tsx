import { NextPage } from "next"
import { Layout } from "components/common/Layout"
import { Section } from "components/common/Section"
import SvgGithub from "components/icons/Github"
import SvgLinkedin from "components/icons/Linkedin"
import React from "react"
import { ProfileHeader } from "components/common/ProfileHeader"
import { ContactItem } from "components/common/ContactItem"

const Home: NextPage<{}> = () => (
  <Layout>
    <ProfileHeader />
    <Section title="About" backgroundColor="section-1">
      <p>I build sites using modern web technologies.</p>
    </Section>
    <Section title="Recent Work" backgroundColor="section-2">
      <ul className="list-disc list-inside">
        <li>Gravity Lab</li>
        <li>A Place For Mom</li>
        <li>Atlanta Journal Constitution</li>
        <li>Total Wine</li>
        <li>Books-A-Million</li>
        <li>Lenovo</li>
      </ul>
    </Section>
    <Section title="Contact" backgroundColor="section-3">
      <ContactItem
        icon={<SvgGithub className="w-10 h-10 fill-current" />}
        name="GitHub"
      />
      <ContactItem
        icon={<SvgLinkedin className="w-10 h-10 fill-current" />}
        name="LinkedIn"
      />
    </Section>
  </Layout>
)

export default Home

export async function getStaticProps() {
  const config = await import(`../data/config.json`)

  return {
    props: {
      config: config.default,
    },
  }
}
