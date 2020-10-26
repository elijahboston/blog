import {NextPage} from 'next'
import {LayoutHomepage} from 'components/layouts/layout-homepage'
import {Section} from 'components/common/section'
import SvgGithub from 'components/icons/github'
import SvgLinkedin from 'components/icons/linkedin'
import React from 'react'
import {PrimaryAnchor, PrimaryAnchorProps} from 'components/kit/primary-anchor'
import {SITE_DATA} from 'data/site'
import SvgTwitter from 'components/icons/twitter'

const ContactLink: React.FC<PrimaryAnchorProps> = (props) => (
  <PrimaryAnchor className="border-gray-600 m-2" {...props} />
)

const Home: NextPage<Record<string, unknown>> = () => (
  <LayoutHomepage>
    <Section title="About Me">
      <p className="text-center lg:text-left">{SITE_DATA.aboutMe}</p>
    </Section>
    <Section title="Contact">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <ContactLink
          icon={<SvgTwitter className="w-10 h-10 fill-current" />}
          href={SITE_DATA.contactInfo.twitter}
        >
          Twitter
        </ContactLink>
        <ContactLink
          icon={<SvgLinkedin className="w-10 h-10 fill-current" />}
          href={SITE_DATA.contactInfo.linkedIn}
        >
          LinkedIn
        </ContactLink>
      </div>
    </Section>
    <Section title="Code">
      <div className="flex flex-wrap justify-center lg:justify-start">
        <ContactLink
          icon={<SvgGithub className="w-10 h-10 fill-current" />}
          href={SITE_DATA.contactInfo.github}
        >
          GitHub
        </ContactLink>
      </div>
    </Section>
  </LayoutHomepage>
)

export default Home
