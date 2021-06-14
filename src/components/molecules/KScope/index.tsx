import P5Sketch from 'p5' // Import this for typechecking and intellisense
import { range } from 'lodash'
import { useEffect, useRef } from 'react'

interface KScopeProps {}

export const KScope: React.FC<KScopeProps> = () => {
  const ref = useRef<HTMLDivElement>()
  // radius
  const R1 = 1.3

  // rings
  const N = 20

  useEffect(() => {
    let colorMap = []
    const setup = (p5: P5Sketch, canvasParentRef: Element) => {
      p5.createCanvas(400, 400, 'webgl')
        .parent(canvasParentRef)
        .style('width:100%;height:auto')

      p5.colorMode('hsb')
      colorMap = range(0, N).map(() => p5.random(366))
    }

    const draw = (p5: P5Sketch) => {
      const rad = p5.height / 4
      p5.noFill()
      p5.strokeWeight(1)
      p5.rectMode('center')
      p5.background('#2e3d50')

      p5.push()
      range(0, N).map((i) => {
        const radius = rad * R1 * 2

        p5.stroke(colorMap[i], 100, 100)
        p5.rotateZ(p5.frameCount / 5000)

        p5.push()
        p5.ellipse(0, 0, radius, radius, 3)
        p5.pop()
      })
      p5.pop()
    }

    const sketch = new P5Sketch((p) => {
      p.setup = () => setup(p, ref.current)
      p.draw = () => draw(p)
    })

    return () => {
      sketch.remove()
    }
  }, [ref])

  return <div ref={ref} className='w-full' />
}
