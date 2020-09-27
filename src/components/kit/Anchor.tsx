import React, { useRef } from "react"
import Link from "next/link"

export const PREFETCH_DOMAINS = ["localhost"]

export interface AnchorProps {
  href: string
  as?: string
}

const AnchorBase = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & React.HTMLAttributes<HTMLAnchorElement>
>((props, ref) => (
  <a
    className={clsx(["font-sans", "font-bold", props.className])}
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
      href={props.href}
      passHref={true}
      // as={props.as}
      prefetch={
        // Only prefetch URLs on the same domain
        (url && url.hostname && url.hostname in PREFETCH_DOMAINS) || false
      }
    >
      <a
        className={clsx(["font-sans", "font-bold", props.className])}
        {...props}
      >
        {props.children}
      </a>
    </Link>
  )
}
