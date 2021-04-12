import clsx from 'classnames'
import { Anchor, AnchorProps } from './Anchor'

export const InlineAnchor: React.FC<AnchorProps> = ({
  className,
  children,
  ...other
}) => (
  <Anchor
    {...other}
    className={clsx(
      'anchor-inline gradient-border border-t-0 border-r-0 border-l-0 hover:text-gray-500',
      className
    )}
  >
    {children}
  </Anchor>
)
