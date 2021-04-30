import clsx from "classnames"

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor: React.FC<AnchorProps> = ({
  className,
  children,
  ...other
}) => (
  <a {...other} className={clsx("anchor text-anchor", className)}>
    {children}
  </a>
)
