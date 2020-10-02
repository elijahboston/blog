import { ProfileHeader } from "../common/ProfileHeader"
import { Nav } from "../common/Nav"
import { LayoutBase, LayoutProps } from "./LayoutBase"
import React from "react"

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    <div className="col-span-12">
      <ProfileHeader />
    </div>
    {/* <div className="col-span-12 pt-4">
      <Nav />
    </div> */}
    <div className="col-start-2 col-span-10 lg:col-span-6 lg:col-start-4">
      {props.children}
    </div>
  </LayoutBase>
)
