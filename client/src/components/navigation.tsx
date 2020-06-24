import { SITE_CONFIG } from "config/site"
import Link from "next/link"

export interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => (
  <nav>
    <ul>
      {SITE_CONFIG.nav.map((navItem) => (
        <li>
          <Link href={navItem.path}>
            <a>{navItem.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
