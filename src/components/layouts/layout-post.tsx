import {LayoutBase, LayoutProps} from 'components/layouts/layout-base'
import React from 'react'

export const LayoutPost: React.FC<LayoutProps> = (props) => (
  <LayoutBase compact>
    <div className="col-start-2 col-span-10 lg:col-span-6 lg:col-start-4 pt-20 md:pt-32">
      {props.children}
    </div>
  </LayoutBase>
)
