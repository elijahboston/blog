import * as React from 'react'

const SvgClose = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height={24} width={24} {...props}>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
    </svg>
  )
}

export default SvgClose
