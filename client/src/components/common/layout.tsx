import { Header } from "./header"
import { Navigation } from "./navigation"
import Head from "next/head"
import { SITE_CONFIG } from "config/site"

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => (
  <div className="space-y-6">
    <Head>
      <title>{SITE_CONFIG.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-10 col-start-2 md:col-start-4 md:col-span-6">
        <Header />
        <Navigation />
        <main>{props.children}</main>
        <footer className="text-center m-4">Copyright 2020 Alchemy Lab</footer>
      </div>
    </div>

    <style jsx global>{`
      body {
        font-family: "Verdana", "sans-serif";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
)
