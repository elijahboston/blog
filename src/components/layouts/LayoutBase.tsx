import { Header } from "components/common/Header"
import { SITE_TITLE } from "constants/site"
import Head from "next/head"
import React from "react"

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
    </div>
  </main>
)
