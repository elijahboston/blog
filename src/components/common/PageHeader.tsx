import dynamic from "next/dynamic"
import Link from "next/link"
import React from "react"
import { CubeProps } from "./Cube"
import { Nav } from "./Nav"

const CubeDynamic = dynamic<CubeProps>(() =>
  import("./Cube").then((mod) => mod.Cube)
)

const titleStyle = [
  "font-display",
  "text-2xl",
  "md-text-xl",
  "text-white",
  "font-thin",
  "pl-2",
  "hover:text-blue-400",
  "cursor-pointer",
]

export const PageHeader: React.FC<{}> = () => (
  <header className="flex items-center m-4">
    <div className="flex md:justify-center md:items-center w-8 h-8 text-sm">
      <Link href="/">
        <a>
          <CubeDynamic size="xs" />
        </a>
      </Link>
    </div>

    <Link href="/">
      <h1 className={clsx("hidden md:block", titleStyle)}>Elijah Boston</h1>
    </Link>
    {/* <Link href="/">
      <h1 className={clsx("md:hidden", titleStyle)}>EB</h1>
    </Link> */}
    <div className="flex flex-col flex-grow items-end">
      <Nav />
    </div>
  </header>
)
