import React from "react"
import Link from "next/link"

export const PREFETCH_DOMAINS = ["localhost"]

export interface AnchorProps {
  href: string
}

const AnchorBase: React.FC<
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ className, children, href }) => (
  <a className={clsx(["font-sans", "font-bold", className])} href={href}>
    {children}
  </a>
)

export const Anchor: React.FC<
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
> = (props) => {
  let url
  try {
    url = new URL(props.href)
  } catch {}

  return (
    <Link
      href={props.href}
      prefetch={
        (url && url.hostname && url.hostname in PREFETCH_DOMAINS) || false
      }
    >
      <AnchorBase {...props}>{props.children}</AnchorBase>
    </Link>
  )
}
