import * as React from "react"

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={24} width={24} {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

export default SvgMenu
