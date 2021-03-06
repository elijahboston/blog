export const PostTemplate: React.FC<{
  Content: React.ReactNode
}> = ({ Content }) => (
  <div className='col-start-2 col-span-10 lg:col-span-6 lg:col-start-4'>
    {Content}
  </div>
)
