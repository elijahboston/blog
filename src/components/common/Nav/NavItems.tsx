import { PrimaryAnchor } from "components/kit/PrimaryAnchor"
import { NAV_DATA } from "data/nav"
import { useRouter } from "next/dist/client/router"
import React from "react"

export const NavItems: React.FC<{}> = () => {
  const { pathname } = useRouter()
  const [, root] = pathname.split("/")

  console.log("root:", root)

  return (
    <>
      {NAV_DATA.map((navItem) => (
        <li key={navItem.label}>
          <PrimaryAnchor
            active={!!(`/${root}` === navItem.path)}
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
