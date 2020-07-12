import { SITE_CONFIG } from "config/site"

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <header>
    <h1>{SITE_CONFIG.title}</h1>
  </header>
)
