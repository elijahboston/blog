import { Footer } from '../organisms/Footer'
import { Nav } from '../organisms/Nav'
import { PageHeader } from '../organisms/PageHeader'

export const BaseTemplate: React.FC<{
  Content: React.ReactNode
}> = ({ Content }) => (
  <div className='grid grid-cols-12'>
    <main className='col-span-10 col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4'>
      <header className='mt-10 flex align-middle justify-center'>
        <PageHeader />
      </header>
      <nav className='mt-10'>
        <Nav />
      </nav>
      <section className='content pb-40 my-5'>{Content}</section>
    </main>
    <footer className='footer col-span-12'>
      <Footer />
    </footer>
  </div>
)
