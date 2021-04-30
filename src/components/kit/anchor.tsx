import React from "react"
import Link from "next/link"

export const PREFETCH_DOMAINS = ["localhost"]

export interface AnchorProps {
  href: string
  target?: string
  as?: string
}

const AnchorBase = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
>((props, ref) => (
  <a
    className={clsx([
      "font-sans",
      "font-bold",
      "no-underline",
      "transition",
      "transition-colors",
      "duration-200",
      "text-secondary",
      "border-b",
      "border-transparent",
      "hover:text-white",
      "hover:border-white",
      props.className,
    ])}
    {...props}
    ref={ref}
  >
    {props.children}
  </a>
))

export const Anchor: React.FC<
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
> = (props) => {
  let url

  try {
    url = new URL(props.href.toString())
  } catch {}

  return (
    <Link
      passHref
      href={props.href}
      // As={props.as}
      prefetch={
        // Only prefetch URLs on the same domain
        (url?.hostname && url.hostname in PREFETCH_DOMAINS) || false
      }
    >
      <AnchorBase {...props}>{props.children}</AnchorBase>
    </Link>
  )
}
