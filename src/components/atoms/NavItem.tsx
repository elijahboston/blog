import Link from 'next/link'
import React from 'react'

export interface NavItemProps {
  slug?: string
  isActive?: boolean
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { slug, isActive } = props
  const href = slug === 'root' ? '/' : `/${slug}`

  return (
    <li
      className={[
        'border',
        'mx-2',
        'px-8',
        'py-4',
        isActive ? 'border-secondary' : 'border-borderPrimary'
      ].join(' ')}
    >
      <Link href={href}>
        <a>{slug}</a>
      </Link>
    </li>
  )
}
