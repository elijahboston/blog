import { Header } from "./header"
import { Navigation } from "./navigation"
import Head from "next/head"
import { SITE_CONFIG } from "config/site"

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => (
  <>
    <Head>
      <title>{SITE_CONFIG.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Navigation />

    <main>{props.children}</main>

    <footer>Copyright 2020 Alchemy Lab</footer>
    <style jsx>{`
      header {
        font-size: 72px;
      }
    `}</style>
    <style jsx global>{`
      body {
        font-family: "Verdana", "sans-serif";
      }
    `}</style>
  </>
)
