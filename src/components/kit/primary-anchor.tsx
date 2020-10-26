import React from 'react'
import {Anchor} from './anchor'

export interface PrimaryAnchorProps {
  icon?: React.ReactNode
  href: string
  className?: string
  active?: boolean
}
export const PrimaryAnchor: React.FC<PrimaryAnchorProps> = (props) => (
  <Anchor
    href={props.href}
    className={clsx(
      [
        'border',
        'rounded-md',
        'border-solid',
        'border-white',
        'p-2',
        'pr-4',
        'pl-4',
        'inline-flex',
        'items-center',
        'justify-left',
        'no-underline',
        'transition-colors',
        'duration-500',
        'hover:text-white',
        'hover:border-white',
        props.className
      ],
      {
        'text-gray-600': !props.active,
        'border-gray-600': !props.active,
        'text-secondary': props.active,
        'border-secondary': props.active
      }
    )}
  >
    {props.icon && <span className="self-start">{props.icon}</span>}
    <span className={props.icon ? 'pl-4' : ''}>{props.children}</span>
  </Anchor>
)
