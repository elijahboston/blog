import { LayoutBase, LayoutProps } from "./LayoutBase"
import React from "react"
import { Header } from "components/common/Header"

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    <Header compact={false} />
    <div className="col-start-2 col-span-10 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
      {props.children}
    </div>
  </LayoutBase>
)
