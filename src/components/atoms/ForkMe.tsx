import Image from 'next/image'
export interface ForkMeProps {}

export const ForkMe: React.FC<ForkMeProps> = (props) => {
  return (
    <a
      href='https://github.com/elijahboston/blog'
      className='absolute top-0 right-0'
      style={{
        borderBottomColor: 'transparent!important'
      }}
    >
      <Image
        loading='lazy'
        width='149'
        height='149'
        src='/github-corner-right.svg'
        className='attachment-full size-full'
        alt='Fork me on GitHub'
        data-recalc-dims='1'
      />
    </a>
  )
}
