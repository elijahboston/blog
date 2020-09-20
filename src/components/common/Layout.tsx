import Head from "next/head"
import { SITE_TITLE } from "constants/site"

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => (
  <div className="pt-12 md-pt-24 md-pb-12">
    <Head>
      <title>{SITE_TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid grid-cols-12 gap-3">
      <div className="col-start-2 col-span-10 md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-5 bg-white rounded-lg">
        <main>{props.children}</main>
      </div>
    </div>
  </div>
)
