import { Nav } from "../common/Nav"
import { LayoutBase, LayoutProps } from "components/layouts/LayoutBase"
import React from "react"
import { PageHeader } from "components/common/PageHeader"

export const LayoutPost: React.FC<LayoutProps> = (props) => (
  <LayoutBase
    nav={
      <>
        <PageHeader />
      </>
    }
  >
    {props.children}
  </LayoutBase>
)
