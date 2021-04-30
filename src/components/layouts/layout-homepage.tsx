import { LayoutBase, LayoutProps } from './layout-base'
import React from 'react'

export const LayoutHomepage: React.FC<LayoutProps> = (props) => (
  <LayoutBase compact={false}>
    <div className='col-start-2 col-span-10 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5'>
      {props.children}
    </div>
  </LayoutBase>
)
