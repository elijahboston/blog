import { SITE_DATA } from "data/site"
import React from "react"
import { Cube } from "./Cube"

export const ProfileHeader: React.FC<{}> = () => (
  <header className="flex flex-col justify-center items-center pt-6 md:pt-12">
    <div className="m-10">
      <Cube size="lg" />
    </div>

    <h1 className="text-white text-3xl py-0">{SITE_DATA.siteTitle}</h1>
    <h2 className="text-gray-600 text-2xl">{SITE_DATA.tagline}</h2>
  </header>
)
