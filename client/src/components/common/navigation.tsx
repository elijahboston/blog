import { SITE_CONFIG } from "config/site"
import Link from "next/link"
import { Anchor } from "components/kit/anchor"

export interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => (
  <nav>
    <ul className="list-none flex justify-center items-center space-x-6">
      {SITE_CONFIG.nav.map((navItem) => (
        <li key={navItem.path}>
          <Anchor href={navItem.path}>{navItem.title}</Anchor>
        </li>
      ))}
    </ul>
  </nav>
)
