export interface PageTitleProps {}

export const PageTitle: React.FC<PageTitleProps> = (props) => (
  <h1 className='my-10 text-xl font-display text-bodyTextColor'>
    {props.children}
  </h1>
)
