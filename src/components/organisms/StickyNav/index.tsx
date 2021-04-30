import React from "react"
import { HeaderCompact } from "../HeaderCompact"
import { NavExpand } from "../NavExpand"

export const StickyNav: React.FC<{}> = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center m-4">
      <HeaderCompact />
      <NavExpand />
    </div>
  )
}
