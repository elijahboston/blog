import Link from 'next/link'
import { SITE_TITLE } from '~/constants'
import { ProfileImage } from '../atoms/ProfileImage'

export interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Link href='/'>
      <a className='flex flex-col justify-center items-center'>
        <ProfileImage />
        <h2>{SITE_TITLE}</h2>
      </a>
    </Link>
  )
}
