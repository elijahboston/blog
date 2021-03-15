import { NavAnchor } from '../../../components/atoms/NavAnchor'

export interface NavItemProps {
  className?: string
  rootPath: string
  path: string
  label: string
}
export const NavItem: React.FC<
  NavItemProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, rootPath, path, label }) => {
  return (
    <li className={clsx('mx-2', className)}>
      <NavAnchor
        active={Boolean(`/${rootPath}` === path)}
        href={path}
        className='m-2'
      >
        {label}
      </NavAnchor>
    </li>
  )
}
