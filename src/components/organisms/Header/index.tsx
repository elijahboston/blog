import { Cube } from '~/components/molecules/Cube'
import { SITE_DATA } from '~/data/site'
import Link from 'next/link'
import { Anchor } from '~/components/atoms/Anchor'

export const Header: React.FC<{ compact?: boolean }> = ({ compact }) => {
  return (
    <div className='col-span-12'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 lg:col-span-8 lg:col-start-3'>
          <header className='flex flex-col justify-center items-center pt-6 md:pt-6'>
            <div className='m-10'>
              <Link href='/'>
                <a>
                  <Cube size='lg' />
                </a>
              </Link>
            </div>

            <Anchor href='/'>
              <h1
                className={clsx([
                  'font-display',
                  'text-2xl',
                  'font-thin',
                  'cursor-pointer',
                  'py-0',
                  'text-white',
                  'text-3xl',
                  'py-0'
                ])}
              >
                {SITE_DATA.siteTitle}
              </h1>
            </Anchor>

            <h2 className='text-gray-600 text-2xl'>{SITE_DATA.tagline}</h2>
          </header>
        </div>
      </div>
    </div>
  )
}
