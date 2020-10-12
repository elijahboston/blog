import { ProfileHeader } from "../common/ProfileHeader"
import { LayoutBase, LayoutProps } from "./LayoutBase"
import React from "react"
import { NavItems } from "components/common/Nav/NavItems"

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    <div className="col-start-2 col-span-10 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
      <ProfileHeader />
      {/* <div className="col-span-12 pt-4">
        <ul className="flex flex-row justify-center">
          <NavItems />
        </ul>
      </div> */}
      {props.children}
    </div>
  </LayoutBase>
)
