import { SITE_TITLE } from "~/constants/site"
import Head from "next/head"
import { Header } from "~/components/organisms/Header"
import { Anchor } from "~/components/atoms/Anchor"

export interface LayoutProps {
  nav?: React.ReactNode
  compact?: boolean
}

export const LayoutBase: React.FC<LayoutProps> = (props) => (
  <main>
    <div className="md-pt-24 md-pb-12">
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 gap-3">
        <Header compact={props.compact} />
        {props.children}
      </div>
      <footer className="flex justify-center content-center py-10 bg-footerBackground">
        <p className="font-display text-xs">
          Built with <Anchor href="http://nextjs.org">Next.js</Anchor> and ❤️
        </p>
      </footer>
    </div>
  </main>
)
