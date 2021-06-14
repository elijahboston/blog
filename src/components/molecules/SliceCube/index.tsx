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

const SIZE_REM = 15
const SLICES = 10
const DISTANCE_BETWEEN_SLICES = 1.2

const randColor = () => Math.floor(Math.random() * 255)
const randomRgb = () => `rgb(${randColor()},${randColor()},${randColor()})`

const animateSlices = () => {
  anime({
    targets: '.slice',
    // keyframes: [{ rotateZ: 0 }, { rotateZ: 90 }],
    delay: anime.stagger([500, 200, 700]),
    rotate: anime.stagger([-360, 360]),
    // loop: true,
    easing: 'easeInOutSine',
    duration: 1400
    // loopComplete: animateSlices
  })
}

const animateNucleus = () => {
  anime({
    targets: '.nucleus',
    keyframes: [
      { rotateX: 35, rotateY: 35 },
      // { rotateX: 90, rotateY: 90 },
      { rotateX: 180, rotateY: 180 },
      { rotateX: 35, rotateY: 35 }
    ],
    delay: anime.stagger([100, 500, 800]),
    rotate: anime.stagger([-360, 360]),
    duration: 2000,
    loop: true,
    easing: 'easeInSine'
    // loopComplete: animateNucleus
  })
}

export const SliceCube: React.FC<{
  size?: number
  slices?: number
  distanceBetweenSlices?: number
}> = ({
  size = SIZE_REM,
  slices = SLICES,
  distanceBetweenSlices = DISTANCE_BETWEEN_SLICES
}) => {
  useEffect(() => {
    animateSlices()
    animateNucleus()
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
          {_range(0, SLICES)
            // Generate slice properties
            .map((n: number) => ({
              rotate: { y: 0 },
              translate: { z: -6 + distanceBetweenSlices * n * -1 }
            }))
            // Render slice
            .map((face: SliceFace, index) => (
              <div
                key={`slice-${index}`}
                className={`slice slice-${index} relative z-0 rounded-md`}
                style={{
                  border: `1px solid ${randomRgb()}`, // '1px solid rgba(255,255,255)',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div
                  className='nucleus rounded-full'
                  style={{
                    transform: 'rotateX(35deg) rotateY(35deg)',
                    border: `1px solid ${randomRgb()}`,
                    width: '8rem',
                    height: '8rem'
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
