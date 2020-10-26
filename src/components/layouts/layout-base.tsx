import {Header} from 'components/common/header'
import {Anchor} from 'components/kit/anchor'
import {SITE_TITLE} from 'constants/site'
import Head from 'next/head'
import React from 'react'

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
      <footer className="flex justify-center content-center py-10 text-xs text-gray-500">
        <p className="font-display">
          Built with <Anchor href="http://nextjs.org">Next.js</Anchor>. Icons
          from{' '}
          <Anchor href="https://simpleicons.org" target="_blank">
            Simple Icons
          </Anchor>
        </p>
      </footer>
    </div>
  </main>
)
