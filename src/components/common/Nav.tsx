import { PrimaryAnchor } from "components/kit/PrimaryAnchor"
import { getStaticProps } from "pages/posts/[slug]"

const NavLink: React.FC<{ href: string }> = (props) => (
  <PrimaryAnchor href={props.href} className="text-white m-2">
    {props.children}
  </PrimaryAnchor>
)
export const Nav = () => (
  <ul className="flex flex-wrap">
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
)
