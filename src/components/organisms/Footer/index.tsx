export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className='flex justify-center content-center py-10'>
      <p className='font-display text-gray-400'>
        Created with <a href='http://nextjs.org'>Next.js</a> and{' '}
        <a href='https://p5js.org/'>p5js</a>.
      </p>
    </footer>
  )
}
