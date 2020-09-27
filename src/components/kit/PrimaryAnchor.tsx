import React from "react"
import { Anchor } from "./Anchor"

export interface PrimaryAnchorProps {
  icon?: React.ReactNode
  href: string
  className?: string
}
export const PrimaryAnchor: React.FC<PrimaryAnchorProps> = (props) => (
  <Anchor
    href={props.href}
    className={clsx([
      "border",
      "rounded-md",
      "border-solid",
      "border-white",
      "p-2",
      "pr-4",
      "pl-4",
      "inline-flex",
      "items-center",
      "justify-left",
      "no-underline",
      "text-gray-600 border-gray-600 hover:text-white hover:border-white",
      props.className,
    ])}
  >
    {props.icon && <span className="self-start">{props.icon}</span>}
    <span className={props.icon ? "pl-4" : ""}>{props.children}</span>
  </Anchor>
)
