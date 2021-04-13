export const BaseTemplate: React.FC<{
  StickyNav?: React.ReactNode
  Nav?: React.ReactNode
  Header?: React.ReactNode
  Content: React.ReactNode
  Footer: React.ReactNode
}> = ({ StickyNav, Nav, Header, Content, Footer }) => (
  <>
    {StickyNav && (
      <nav className='sticky top-0 z-50'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-5'>
            {StickyNav}
          </div>
        </div>
      </nav>
    )}
    <div className='BaseTemplate grid grid-cols-12'>
      <div className='col-span-10 col-start-2 md:col-span-8 md:col-start-3 lg:col-span-4 lg:col-start-5'>
        {Header && <div className='header'>{Header}</div>}
        {Nav && <div className='nav'>{Nav}</div>}
        <div className='content'>{Content}</div>
      </div>
      <div className='footer col-span-12'>{Footer}</div>
    </div>
  </>
)
