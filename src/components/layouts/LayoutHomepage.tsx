import { ProfileHeader } from "../common/ProfileHeader"
import { Nav } from "../common/Nav"
import { LayoutBase, LayoutProps } from "./LayoutBase"
import React from "react"

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    <ProfileHeader />
    <div className="flex justify-center py-8">
      <Nav />
    </div>
    {props.children}
  </LayoutBase>
)
