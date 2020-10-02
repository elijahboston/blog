import SvgClose from "components/icons/Close"
import SvgMenu from "components/icons/Menu"
import { PrimaryAnchor } from "components/kit/PrimaryAnchor"
import { getStaticProps } from "pages/posts/[slug]"
import { useRef, useState } from "react"

const NavLink: React.FC<{ href: string }> = (props) => (
  <PrimaryAnchor href={props.href} className="text-white m-2">
    {props.children}
  </PrimaryAnchor>
)
export const Nav = () => {
  const menuRef = useRef<HTMLOListElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-end lg:items-center">
      <button
        className="text-white w-8 h-8 flex justify-center items-center lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <SvgClose className="fill-current" />
        ) : (
          <SvgMenu className="fill-current" />
        )}
      </button>
      <ul
        className={clsx(
          "transition-height duration-500 ease-in-out overflow-y-hidden lg:flex flex-wrap lg:h-auto",
          {
            "h-48": open,
            "h-0": !open,
          }
        )}
        ref={menuRef}
      >
        <li>
          <NavLink href="/">About Me</NavLink>
        </li>
        <li>
          <NavLink href="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink href="/code-patterns">Code Patterns</NavLink>
        </li>
      </ul>
    </div>
  )
}
