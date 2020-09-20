import React from "react"
import Link from "next/link"

export interface AnchorProps {
  href: string
}
export const Anchor: React.FC<
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ children, className, href }) => (
  <Link href={href}>
    <a className={`font-sans hover:underline ${className}`}>{children}</a>
  </Link>
)
