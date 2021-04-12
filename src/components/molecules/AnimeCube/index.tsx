import { useEffect } from 'react'
import anime from 'animejs'

interface Coordinates {
  x?: number
  y?: number
  z?: number
}

interface CubeFace {
  name: string
  rotate?: Coordinates
  translate?: Coordinates
  gradientDirection?: number
}

export const AnimeCube: React.FC<{ minSize?: number }> = ({ minSize }) => {
  const SIZE_REM = minSize || 10

  const getTransform = (face: CubeFace) => {
    const css = [
      Object.keys(face.rotate).map(
        (axis) => `rotate${axis.toUpperCase()}(${face.rotate[axis]}deg)`
      ),
      Object.keys(face.translate).map(
        (axis) => `translate${axis.toUpperCase()}(${face.translate[axis]}rem)`
      )
    ]

    return { transform: css.join(' ') }
  }

  const z = SIZE_REM / 2

  useEffect(() => {
    anime({
      targets: '.cube',
      keyframes: [{ translateY: 0 }, { translateY: 50 }],
      duration: 2000,
      easing: 'easeInOutBounce',
      loop: true
    })
  }, [])

  return (
    <div>
      <div
        className='scene'
        style={{
          minWidth: SIZE_REM + 'rem',
          minHeight: SIZE_REM + 'rem',
          padding: z + 'rem',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className='cube'
          style={{
            zIndex: 99,
            minWidth: SIZE_REM + 'rem',
            minHeight: SIZE_REM + 'rem',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 2s',
            animation: 'rotate 10s infinite',
            animationTimingFunction: 'ease-in-out',
            transform: 'rotateX(25deg) rotateY(25deg)'
          }}
        >
          {[
            {
              name: 'front',
              rotate: { y: 0 },
              translate: { z },
              gradientDirection: 45
            },
            {
              name: 'right',
              rotate: { y: 90 },
              translate: { z },
              gradientDirection: 45
            },
            {
              name: 'back',
              rotate: { y: 180 },
              translate: { z },
              gradientDirection: 10
            },
            {
              name: 'left',
              rotate: { y: -90 },
              translate: { z },
              gradientDirection: 45
            },
            {
              name: 'top',
              rotate: { x: 90 },
              translate: { z },
              gradientDirection: 45
            },
            {
              name: 'bottom',
              rotate: { x: -90 },
              translate: { z },
              gradientDirection: -45
            }
          ].map((face: CubeFace, index) => (
            <div
              key={'cube-face-' + face.name}
              className={`cube-face cube-face-${face.name}`}
              style={{
                background: `linear-gradient(${
                  face.gradientDirection || 45
                }deg, rgba(131,58,180,.5) 0%, rgba(253,29,29,.5) 50%, rgba(252,176,69,.5) 100%)`,
                position: 'absolute',
                width: '100%',
                height: '100%',
                ...getTransform(face)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
