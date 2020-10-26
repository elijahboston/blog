import {Anchor} from 'components/kit/anchor'
import {SITE_DATA} from 'data/site'
import Link from 'next/link'
import React from 'react'
import {Cube} from './cube'
import {Nav} from './nav'

const titleStyle = {
  shared: ['font-display', 'text-2xl', 'font-thin', 'cursor-pointer', 'py-0'],
  compact: ['hidden', 'lg:block'],
  normal: ['text-white', 'text-3xl', 'py-0']
}

export const Header: React.FC<{compact: boolean}> = ({compact}) => {
  return (
    <div
      className={clsx({
        'fixed w-full bg-body shadow': compact,
        'col-span-12': !compact
      })}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          <header
            className={clsx({
              'flex items-center m-4 lg:my-4 lg:mx-0': compact,
              'flex flex-col justify-center items-center pt-6 md:pt-6': !compact
            })}
          >
            <div
              className={clsx({
                'flex md:justify-center md:items-center w-8 h-8 text-sm pr-10 md:px-10': compact,
                'm-10': !compact
              })}
            >
              <Link href="/">
                <a>
                  <Cube size={compact ? 'xs' : 'lg'} />
                </a>
              </Link>
            </div>

            <Anchor href="/">
              <h1
                className={clsx(titleStyle.shared, {
                  [titleStyle.compact.join(' ')]: compact,
                  [titleStyle.normal.join(' ')]: !compact
                })}
              >
                {SITE_DATA.siteTitle}
              </h1>
            </Anchor>
            {!compact && (
              <h2 className="text-gray-600 text-2xl">{SITE_DATA.tagline}</h2>
            )}
            <div className="flex flex-col flex-grow items-end">
              <Nav compact={compact} />
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}
