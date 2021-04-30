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
      'border-b-2 border-secondary text-secondary hover:text-gray-500',
      className
    )}
  >
    {children}
  </Anchor>
)
