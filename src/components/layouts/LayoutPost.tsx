import { LayoutBase, LayoutProps } from "components/layouts/LayoutBase"
import React from "react"
import { Header } from "components/common/Header"

export const LayoutPost: React.FC<LayoutProps> = (props) => (
  <LayoutBase compact={true}>
    <div className="col-start-2 col-span-10 lg:col-span-6 lg:col-start-4 pt-20 md:pt-32">
      {props.children}
    </div>
  </LayoutBase>
)
