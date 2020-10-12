import { SITE_DATA } from "data/site"
import Link from "next/link"
import React from "react"
import { Cube } from "./Cube"
import { ResponsiveNav } from "./Nav/ResponsiveNav"

const titleStyle = [
  "font-display",
  "text-2xl",
  "md-text-xl",
  "text-white",
  "font-thin",
  "pl-5",
  "hover:text-blue-400",
  "cursor-pointer",
]

export const PageHeader: React.FC<{}> = () => (
  <header className="flex items-center m-4">
    <div className="flex md:justify-center md:items-center w-8 h-8 text-sm">
      <Link href="/">
        <a>
          <Cube size="xs" />
        </a>
      </Link>
    </div>

    <Link href="/">
      <h1 className={clsx("hidden md:block py-0", titleStyle)}>
        {SITE_DATA.siteTitle}
      </h1>
    </Link>
    {/* <Link href="/">
      <h1 className={clsx("md:hidden", titleStyle)}>EB</h1>
    </Link> */}
    <div className="flex flex-col flex-grow items-end">
      <ResponsiveNav />
    </div>
  </header>
)
