import { SITE_DATA } from '~/data/site'
import Link from 'next/link'
import { Anchor } from '~/components/atoms/Anchor'
import { SliceCube } from '~/components/molecules/SliceCube'

export const HomepageHero: React.FC<{}> = () => {
  return (
    <header className='flex flex-col justify-center items-center mt-8 mb-4'>
      <div className='my-20'>
        <Link href='/'>
          <a>
            <SliceCube />
          </a>
        </Link>
      </div>

      <Anchor href='/'>
        <h1
          className={clsx([
            'font-display',
            'font-bold',
            'text-xl',
            'font-thin',
            'cursor-pointer',
            'text-white'
          ])}
        >
          {SITE_DATA.siteTitle}
        </h1>
      </Anchor>

      <h2 className='text-gray-600 text-md'>{SITE_DATA.tagline}</h2>
    </header>
  )
}
