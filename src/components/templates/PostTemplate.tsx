export const PostTemplate: React.FC<{
  Hero?: React.ReactNode
  Content?: React.ReactNode
}> = ({ Hero, Content }) => (
  <>
    <section className='my-5'>{Hero}</section>
    {Content}
  </>
)
