import { SliceCube } from '~/components/molecules/SliceCube'

export const HomepageHero: React.FC<{}> = () => {
  return (
    <header className='flex flex-col justify-center items-center my-10 mb-0'>
      <div className='my-20'>
        <SliceCube />
      </div>
    </header>
  )
}
