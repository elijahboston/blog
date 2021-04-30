import SvgClose from "~/components/icons/close"
import SvgMenu from "~/components/icons/menu"
import { NavItem, NavItemProps } from "~/components/molecules/NavItem"
import { NAV_DATA } from "~/data/nav"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import clsx from "classnames"

interface NavExpandProps extends React.HTMLAttributes<HTMLElement> {}

export const NavExpand: React.FC<NavExpandProps> = ({ className }) => {
  const menuRef = useRef<HTMLOListElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const { pathname } = useRouter()
  const [, root] = pathname.split("/")

  return (
    <nav className={clsx("flex flex-col items-end", className)}>
      <button
        type="button"
        className="text-white w-8 h-8 flex justify-center items-center"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <SvgClose className="fill-current" />
        ) : (
          <SvgMenu className="fill-current" />
        )}
      </button>

      <ul
        ref={menuRef}
        className={clsx(
          "transition-height duration-500 ease-in-out overflow-y-hidden flex-wrap absolute top-10",
          {
            "h-32": open,
            "h-0": !open,
            hidden: !open,
          }
        )}
      >
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
