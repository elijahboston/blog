import { ProfileHeader } from "../common/ProfileHeader"
import { Nav } from "../common/Nav"
import { LayoutBase, LayoutProps } from "./LayoutBase"
import React from "react"

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    {/* <div className="col-span-12 pt-4">
      <Nav />
    </div> */}
    <div className="col-start-2 col-span-10 lg:col-span-8 lg:col-start-3">
      <ProfileHeader />
      {props.children}
    </div>
  </LayoutBase>
)
