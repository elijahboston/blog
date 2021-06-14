import dynamic from 'next/dynamic'

const KScopeDynamic = dynamic(
  import('~/components/molecules/KScope').then((mod) => mod.KScope),
  { ssr: false }
)
export interface HomepageHeroProps {
  title?: string
  subtitle?: string
}
export const HomepageHero: React.FC<HomepageHeroProps> = ({
  title,
  subtitle
}) => (
  <header className='flex flex-col justify-center items-center md:my-10 md:mb-0'>
    <div className='w-full' style={{ maxWidth: '400px' }}>
      <KScopeDynamic />
    </div>
    <div id='site-title' className='py-2 text-center'>
      <h1 className='font-display text-gray-300 text-xl'>{title}</h1>
      <h2 className='font-display text-gray-400 text-md font-bold'>
        {subtitle}
      </h2>
    </div>
  </header>
)
