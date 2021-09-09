export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className='flex justify-center content-center'>
      <small className='my-5'>
        Created with <a href='http://nextjs.org'>Next.js</a>
      </small>
    </footer>
  )
}
