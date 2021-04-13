import { useEffect } from 'react'
import anime from 'animejs'
import _range from 'lodash/range'

interface Coordinates {
  x?: number
  y?: number
  z?: number
}

interface SliceFace {
  rotate?: Coordinates
  translate?: Coordinates
}

const SIZE_REM = 10
const SLICES = 10
const DISTANCE_BETWEEN_SLICES = 1.2
const ROTATE = -20

export const SliceCube: React.FC<{
  size?: number
  slices?: number
  distanceBetweenSlices?: number
}> = ({
  size = SIZE_REM,
  slices = SLICES,
  distanceBetweenSlices = DISTANCE_BETWEEN_SLICES
}) => {
  const getTransform = (face: SliceFace) => {
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

  useEffect(() => {
    anime({
      targets: '.cube',
      keyframes: [
        { rotateX: 0, rotateY: 0 },
        { rotateX: ROTATE, rotateY: ROTATE }
      ],
      delay: anime.stagger(100),
      easing: 'easeInOutQuad'
    })
    anime({
      targets: '.slice',
      keyframes: [{ scale: 1 }, { scale: 1.05 }, { scale: 1 }],
      delay: anime.stagger(100),
      loop: true,
      easing: 'easeInOutQuad'
    })
  }, [])

  return (
    <div>
      <div
        className='scene'
        style={{
          width: size + 'rem',
          height: size + 'rem',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className='cube'
          style={{
            zIndex: 99,
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s'
          }}
        >
          {_range(0, slices)
            // Generate slice properties
            .map((n: number) => ({
              rotate: { y: 0 },
              translate: { z: distanceBetweenSlices * n * -1 }
            }))
            // Render slice
            .map((face: SliceFace, index) => (
              <div
                key={`slice-${index}`}
                className={`slice slice-${index}`}
                style={{
                  background: 'rgba(131,58,180,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
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
