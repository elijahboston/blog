import { SliceCube } from '~/components/molecules/SliceCube'

export interface HomepageHeroProps {
  title?: string
  subtitle?: string
}
export const HomepageHero: React.FC<HomepageHeroProps> = ({
  title,
  subtitle
}) => {
  return (
    <header className='relative flex flex-col justify-center items-center my-10 mb-0'>
      <div className='my-20 relative z-10'>
        <SliceCube />
      </div>
      <div id='site-title' className='py-2 text-center'>
        <h1 className='font-display text-gray-300 text-xl'>{title}</h1>
        <h2 className='font-display text-gray-500 text-md font-bold'>
          {subtitle}
        </h2>
      </div>
    </header>
  )
}
