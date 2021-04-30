import { Anchor } from '~/components/atoms/Anchor'
import { Cube } from '~/components/molecules/Cube'
import { SITE_DATA } from '~/data/site'
import Link from 'next/link'

export const HeaderCompact: React.FC<{}> = () => {
  return (
    <header className='flex items-center'>
      <div className='flex md:justify-center md:items-center w-8 h-8 text-sm pr-10 md:px-10'>
        <Link href='/'>
          <a>
            <Cube size='xs' />
          </a>
        </Link>
      </div>

      <Anchor href='/'>
        <h1 className='text-xl'>{SITE_DATA.siteTitle}</h1>
      </Anchor>
    </header>
  )
}
