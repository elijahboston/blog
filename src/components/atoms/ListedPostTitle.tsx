import React from 'react'

export interface ListedPostTitleProps {}

export const ListedPostTitle: React.FC<ListedPostTitleProps> = (props) => (
  <h2 className='text-h2 text-lg text-secondary'>{props.children}</h2>
)
