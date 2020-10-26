import {PrimaryAnchor} from 'components/kit/primary-anchor'
import {NavItem, NAV_DATA} from 'data/nav'
import {useRouter} from 'next/dist/client/router'

export const NavItems: React.FC<{}> = () => {
  const {pathname} = useRouter()
  const [, root] = pathname.split('/')

  return (
    <>
      {NAV_DATA.map((navItem: NavItem) => (
        <li key={navItem.label}>
          <PrimaryAnchor
            active={Boolean(`/${root}` === navItem.path)}
            href={navItem.path}
            className="text-white m-2"
          >
            {navItem.label}
          </PrimaryAnchor>
        </li>
      ))}
    </>
  )
}
