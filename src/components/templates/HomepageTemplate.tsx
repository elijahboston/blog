export interface HomepageTemplateProps {}

export const HomepageTemplate: React.FC<{
  TopContent?: React.ReactNode
  Content: React.ReactNode
}> = ({ TopContent, Content }) => (
  <>
    {TopContent && <div className='my-10'>{TopContent}</div>}
    <div>{Content}</div>
  </>
)
