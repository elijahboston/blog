import clsx from 'classnames'

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  children,
  ...other
}) => (
  <a
    {...other}
    className={clsx(
      'anchor hover:text-anchor border border-transparent hover:gradient-border border-t-0 border-r-0 border-l-0',
      className
    )}
  >
    {children}
  </a>
)
