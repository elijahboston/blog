import clsx from 'classnames'
import Link from 'next/link'

export interface NavItemProps {
  slug?: string
  isActive?: boolean
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { slug, isActive } = props
  const href = slug === 'root' ? '/' : `/${slug}`

  return (
    <li
      className={clsx('border', 'mx-2', 'px-8', 'py-4', {
        'border-secondary': isActive,
        'border-borderPrimary': !isActive
      })}
    >
      <Link href={href}>
        <a>{slug}</a>
      </Link>
    </li>
  )
}
