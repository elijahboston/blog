import { Anchor } from '~/components/atoms/Anchor'

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className='flex justify-center content-center py-10 text-xs text-gray-500'>
      <p className='font-display'>
        Built with <Anchor href='http://nextjs.org'>Next.js</Anchor>. Icons from{' '}
        <Anchor href='https://simpleicons.org' target='_blank'>
          Simple Icons
        </Anchor>
      </p>
    </footer>
  )
}
