export interface CubeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Cube: React.FC<CubeProps> = ({ className }) => {
  return (
    <div className={clsx('cube-container', className)} aria-hidden='true'>
      <div className='cube-scene'>
        <div className='cube'>
          <div className='cube__face border gradient-border cube__face--front' />
          <div className='cube__face border gradient-border cube__face--back' />
          <div className='cube__face border gradient-border cube__face--right' />
          <div className='cube__face border gradient-border cube__face--left' />
          <div className='cube__face border gradient-border cube__face--top' />
          <div className='cube__face border gradient-border cube__face--bottom' />
        </div>
      </div>
    </div>
  )
}
