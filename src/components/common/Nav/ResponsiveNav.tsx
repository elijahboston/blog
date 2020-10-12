import SvgClose from "components/icons/Close"
import SvgMenu from "components/icons/Menu"
import React, { useRef, useState } from "react"
import { NavItems } from "./NavItems"

export const ResponsiveNav: React.FC<{}> = () => {
  const menuRef = useRef<HTMLOListElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav className="flex flex-col items-end lg:items-center">
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
        <NavItems />
      </ul>
    </nav>
  )
}
