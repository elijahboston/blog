import { Nav } from "../common/Nav"
import { LayoutBase, LayoutProps } from "components/layouts/LayoutBase"
import React from "react"
import { PageHeader } from "components/common/PageHeader"

export const LayoutPost: React.FC<LayoutProps> = (props) => (
  <LayoutBase>
    <div className="col-span-12">
      <div className="fixed w-full bg-body shadow">
        <PageHeader />
      </div>
    </div>
    <div className="col-start-2 col-span-10 lg:col-span-8 lg:col-start-3 pt-20 md:pt-32">
      {props.children}
    </div>
  </LayoutBase>
)
