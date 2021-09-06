import Link from 'next/link'
import { ProfileImage } from '../atoms/ProfileImage'

export interface PageHeaderProps {}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Link href='/'>
      <a className='flex flex-col justify-center items-center'>
        <ProfileImage />
        <h2>elijah boston</h2>
      </a>
    </Link>
  )
}
