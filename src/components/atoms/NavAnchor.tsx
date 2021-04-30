import clsx from 'classnames'

export interface NavAnchorProps {
  icon?: React.ReactNode
  href: string
  className?: string
  active?: boolean
}
export const NavAnchor: React.FC<NavAnchorProps> = (props) => (
  <a
    href={props.href}
    className={clsx('primary-anchor', {
      'primary-anchor-active': props.active
    })}
  >
    {props.icon && <span className='self-start'>{props.icon}</span>}
    <span className={props.icon ? 'pl-4' : ''}>{props.children}</span>
  </a>
)
