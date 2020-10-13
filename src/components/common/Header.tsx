import { SITE_DATA } from "data/site"
import Link from "next/link"
import React from "react"
import { Cube } from "./Cube"
import { Nav } from "./Nav"

const titleStyle = {
  compact: [
    "font-display",
    "text-2xl",
    "md-text-xl",
    "text-white",
    "font-thin",
    "pl-5",
    "hover:text-blue-400",
    "cursor-pointer",
    "hidden",
    "md:block",
    "py-0",
  ],
  normal: ["text-white", "text-3xl", "py-0"],
}

export const Header: React.FC<{ compact: boolean }> = ({ compact }) => {
  return (
    <div
      className={clsx({
        "fixed w-full bg-body shadow": compact,
        "col-span-12": !compact,
      })}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-6 lg:col-span-6 lg:col-start-4">
          <header
            className={
              compact
                ? "flex items-center m-4 lg:my-4 lg:mx-0"
                : "flex flex-col justify-center items-center pt-6 md:pt-6"
            }
          >
            <div
              className={
                compact
                  ? "flex md:justify-center md:items-center w-8 h-8 text-sm"
                  : "m-10"
              }
            >
              <Link href="/">
                <a>
                  <Cube size={compact ? "xs" : "lg"} />
                </a>
              </Link>
            </div>

            <Link href="/">
              <h1
                className={clsx({
                  [titleStyle.compact.join(" ")]: compact,
                  [titleStyle.normal.join(" ")]: !compact,
                })}
              >
                {SITE_DATA.siteTitle}
              </h1>
            </Link>
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
