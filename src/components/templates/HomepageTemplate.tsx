export interface HomepageTemplateProps {}

export const HomepageTemplate: React.FC<{
  Content: React.ReactNode
}> = ({ Content }) => <div className='HomepageTemplate'>{Content}</div>
