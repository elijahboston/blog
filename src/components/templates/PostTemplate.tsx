export const PostTemplate: React.FC<{
  Content: React.ReactNode
}> = ({ Content }) => (
  <article className='PostTemplate col-start-2 col-span-10 lg:col-span-6 lg:col-start-4'>
    {Content}
  </article>
)
