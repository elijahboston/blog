import { HOME_PATH, POST_PATH } from '~/constants/site'

export interface NavItem {
  label: string
  path: string
}

export const NAV_DATA: NavItem[] = [
  {
    label: 'About Me',
    path: HOME_PATH
  },
  {
    label: 'Posts',
    path: POST_PATH
  }
]
