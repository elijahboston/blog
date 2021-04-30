import { NavAnchor } from "../../../components/atoms/NavAnchor"

export interface NavItemProps {
  rootPath: string
  path: string
  label: string
}
export const NavItem: React.FC<NavItemProps> = ({ rootPath, path, label }) => {
  return (
    <li>
      <NavAnchor
        active={Boolean(`/${rootPath}` === path)}
        href={path}
        className="text-white m-2"
      >
        {label}
      </NavAnchor>
    </li>
  )
}
