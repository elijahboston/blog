export interface CubeProps {
  size?: "lg" | "sm" | "xs"
}
export const Cube: React.FC<CubeProps> = ({ size }) => {
  return (
    <div className={`cube-container text-${size || "lg"}`} aria-hidden="true">
      <div className="cube-scene">
        <div className="cube">
          <div className="cube__face border border-secondary cube__face--front" />
          <div className="cube__face border border-secondary cube__face--back" />
          <div className="cube__face border border-secondary cube__face--right" />
          <div className="cube__face border border-secondary cube__face--left" />
          <div className="cube__face border border-secondary cube__face--top" />
          <div className="cube__face border border-secondary cube__face--bottom" />
        </div>
      </div>
    </div>
  )
}
