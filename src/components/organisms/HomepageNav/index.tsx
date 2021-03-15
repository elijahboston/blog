import { NavItem, NavItemProps } from '~/components/molecules/NavItem'
import { NAV_DATA } from '~/data/nav'
import { useRouter } from 'next/router'

export const HomepageNav: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { pathname } = useRouter()
  const [, root] = pathname.split('/')

  return (
    <nav className='flex items-center pt-6'>
      <ul className='w-full flex justify-center'>
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
