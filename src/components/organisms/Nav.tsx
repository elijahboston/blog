import { useRouter } from 'next/router'
import { NavItem } from '../atoms/NavItem'

export interface NavProps {}

const menu = ['root', 'posts']

export const Nav: React.FC<NavProps> = (props) => {
  const router = useRouter()
  const fragments = router.asPath.split('/').filter((s) => s.length)
  const rootSlug = fragments.shift()

  return (
    <ul
      className='text-gray-500 list-none flex p-0 m-0 my-10 justify-center'
      aria-details='breadcrumbs'
    >
      {menu.map((slug, index) => (
        <NavItem
          key={slug}
          isActive={rootSlug === slug || (!rootSlug && index === 0)}
          slug={slug}
        />
      ))}
    </ul>
  )
}
