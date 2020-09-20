export const ContactItem = (props: {
  icon: React.ReactNode
  name: string
  href: string
}) => (
  <a
    href={props.href}
    className="border rounded-md border-solid border-white p-2 m-2 inline-flex items-center justify-left"
  >
    <span className="self-start">{props.icon}</span>
    <span className="pl-4">{props.name}</span>
  </a>
)
