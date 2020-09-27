import dynamic from "next/dynamic"
import React from "react"
import { Nav } from "./Nav"

const CubeDynamic = dynamic<{}>(() => import("./Cube").then((mod) => mod.Cube))

export const PageHeader: React.FC<{}> = () => (
  <header className="flex items-center">
    {/* <img
      src="/self.jpeg"
      className="rounded-full w-1/2 h-1/2 md:w-1/6 md:h-1/6 pt-4 pb-4"
    /> */}
    <div className="">
      <CubeDynamic />
    </div>
    <h1 className="text-2xl md-text-xl text-white">Elijah Boston</h1>
    <div className="flex flex-grow justify-end">
      <Nav />
    </div>
  </header>
)
