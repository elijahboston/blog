import { Section } from '~/components/molecules/Section'
import SvgGithub from '~/components/icons/github'
import SvgLinkedin from '~/components/icons/linkedin'
import { SITE_DATA } from '~/data/site'
import SvgTwitter from '~/components/icons/twitter'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Footer } from '~/components/organisms/Footer'
import { HomepageTemplate } from '~/components/templates/HomepageTemplate'
import { HomepageNav } from '~/components/organisms/HomepageNav'
import { HomepageHero } from '~/components/organisms/HomepageHero'
import { NavAnchor, NavAnchorProps } from '~/components/atoms/NavAnchor'
import { NextPage } from 'next'

const ContactLink: React.FC<NavAnchorProps> = (props) => (
  <NavAnchor className='border-gray-600 m-2' {...props} />
)

const Home: NextPage<Record<string, unknown>> = () => (
  <BaseTemplate
    Header={<HomepageHero />}
    Nav={<HomepageNav />}
    Content={
      <HomepageTemplate
        Content={
          <>
            <Section title='About Me'>
              <p className='text-center lg:text-left'>{SITE_DATA.aboutMe}</p>
            </Section>
            <Section title='Contact'>
              <div className='flex flex-wrap justify-center lg:justify-start'>
                <ContactLink
                  icon={<SvgTwitter className='w-10 h-10 fill-current' />}
                  href={SITE_DATA.contactInfo.twitter}
                >
                  Twitter
                </ContactLink>
                <ContactLink
                  icon={<SvgLinkedin className='w-10 h-10 fill-current' />}
                  href={SITE_DATA.contactInfo.linkedIn}
                >
                  LinkedIn
                </ContactLink>
              </div>
            </Section>
            <Section title='Code'>
              <div className='flex flex-wrap justify-center lg:justify-start'>
                <ContactLink
                  icon={<SvgGithub className='w-10 h-10 fill-current' />}
                  href={SITE_DATA.contactInfo.github}
                >
                  GitHub
                </ContactLink>
              </div>
            </Section>
          </>
        }
      />
    }
    Footer={<Footer />}
  />
)

export default Home
