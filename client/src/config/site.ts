export interface NavItem {
  title: string
}

export interface SiteConfig {
  title: string
}

export const SITE_CONFIG = {
  title: "Alchemy Lab",
  nav: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Posts",
      path: "/posts",
    },
  ],
}
