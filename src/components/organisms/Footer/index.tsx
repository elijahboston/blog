import { Anchor } from '~/components/atoms/Anchor'

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className='flex justify-center content-center py-10 text-xs text-gray-500'>
      <p className='font-display'>
        Created with <a href='http://nextjs.org'>Next.js</a> and{' '}
        <a href='https://p5js.org/'>p5js</a>.
      </p>
    </footer>
  )
}
