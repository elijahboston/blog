import { SITE_CONFIG } from "config/site"
import { Logo } from "components/common/logo"

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <header className="flex justify-center items-center">
    <Logo>{SITE_CONFIG.title}</Logo>
  </header>
)
