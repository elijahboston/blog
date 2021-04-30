import Link from 'next/link'
import { SliceCube } from '~/components/molecules/SliceCube'

export interface PostNavProps {}

export const PostNav: React.FC<PostNavProps> = (props) => {
  return (
    <div
      className={clsx(
        'overflow-x-hidden bg-backgrounds-nav group p-5 md:py-5 md:px-0'
      )}
      style={{
        borderBottom: '1px solid #9e2f53'
      }}
    >
      <Link href='/'>
        <a>
          <div className='flex items-center border border-transparent rounded-full'>
            <SliceCube slices={5} size={2} distanceBetweenSlices={0.5} />
            <h2 className='transition-colors text-h2 justify-start ml-5 text-gray-300 group-hover:text-white'>
              elijah boston
            </h2>
          </div>
        </a>
      </Link>
    </div>
  )
}
