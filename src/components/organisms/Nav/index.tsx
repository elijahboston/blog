import Link from 'next/link'
import { SliceCube } from '~/components/molecules/SliceCube'
import React from 'react'

export interface PostNavProps {}

export const PostNav: React.FC<PostNavProps> = (props) => {
  return (
    <div
      className={clsx(
        'overflow-x-hidden bg-backgrounds-nav group p-5 md:py-5 md:px-0 border-b border-secondary'
      )}
    >
      <Link href='/'>
        <a>
          <div className='flex items-center border border-transparent rounded-full'>
            <SliceCube slices={5} size={2} distanceBetweenSlices={0.5} />
            <h2 className='transition-colors text-h2 justify-start ml-5 text-primary group-hover:text-secondary'>
              elijah boston
            </h2>
          </div>
        </a>
      </Link>
    </div>
  )
}

export interface NavProps {}

export const Nav: React.FC<NavProps> = (props) => {
  return (
    <div
      className={clsx(
        'flex justify-between items-center overflow-x-hidden bg-backgrounds-nav group p-5 md:py-5 md:px-0 border-b border-secondary'
      )}
    >
      <Link href='/'>
        <a>
          <h2 className='transition-colors text-lg font-display justify-start xs:ml-5 text-primary group-hover:text-secondary'>
            elijah boston
          </h2>
        </a>
      </Link>

      {/* <ul className='flex'>
        <li>
          <Link href='/posts'>
            <a className='text-md font-display text-white'>posts</a>
          </Link>
        </li>
      </ul> */}
    </div>
  )
}
