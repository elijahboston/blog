import Head from "next/head"
import { SITE_TITLE } from "constants/site"

export interface LayoutProps {
  nav?: React.ReactNode
}

export const LayoutBase: React.FC<LayoutProps> = (props) => (
  <main>
    <div className="md-pt-24 md-pb-12">
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-12 gap-3">{props.children}</div>
    </div>
  </main>
)
