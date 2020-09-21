import { PrimaryAnchor } from "components/kit/PrimaryAnchor"
import { getStaticProps } from "pages/posts/[slug]"

const NavLink: React.FC<{ href: string }> = (props) => (
  <PrimaryAnchor href={props.href} className="text-white mr-4 ml-4">
    {props.children}
  </PrimaryAnchor>
)
export const Nav = () => (
  <div className="flex justify-center pt-8 pb-8">
    <NavLink href="#">About Me</NavLink>
    <NavLink href="#">Posts</NavLink>
    <NavLink href="#">Code Patterns</NavLink>
  </div>
)
