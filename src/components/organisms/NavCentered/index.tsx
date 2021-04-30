import { NavItem, NavItemProps } from '~/components/molecules/NavItem'
import { NAV_DATA } from '~/data/nav'
import { useRouter } from 'next/router'

export const NavCentered: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { pathname } = useRouter()
  const [, root] = pathname.split('/')

  return (
    <nav className='flex flex-col items-center lg:items-center pt-6'>
      <ul className='flex flex-row justify-center'>
        {NAV_DATA.map((navItem: NavItemProps) => (
          <NavItem
            key={navItem.label}
            rootPath={root}
            path={navItem.path}
            label={navItem.label}
          />
        ))}
      </ul>
    </nav>
  )
}
