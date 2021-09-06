export interface TagProps {}

export const Tag: React.FC<TagProps> = ({ children }) => (
  <span className=' px-2 mr-2 italic text-textPrimary border rounded-md border-dotted border-borderPrimary'>
    {children}
  </span>
)
