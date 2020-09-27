import Head from "next/head"
import { SITE_TITLE } from "constants/site"

export interface LayoutProps {
  nav?: React.ReactNode
}

export const LayoutBase: React.FC<LayoutProps> = (props) => (
  <div className="md-pt-24 md-pb-12">
    <Head>
      <title>{SITE_TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid grid-cols-12 gap-3">
      {props.nav && <nav className="col-span-12">{props.nav}</nav>}
      <div className="col-start-2 col-span-10 lg:col-span-6 lg:col-start-4">
        <main>{props.children}</main>
      </div>
    </div>
  </div>
)
