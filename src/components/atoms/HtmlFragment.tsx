export interface HtmlFragmentProps {
  html: string
}

export const HtmlFragment: React.FC<HtmlFragmentProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
