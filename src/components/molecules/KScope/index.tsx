import Sketch from 'react-p5'
import p5Types from 'p5' // Import this for typechecking and intellisense
import { range } from 'lodash'

interface KScopeProps {}

export const KScope: React.FC<KScopeProps> = () => {
  // radius
  const R1 = 1.3

  // rings
  const N = 20

  let colorMap = []

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(400, 400, 'webgl').parent(canvasParentRef)

    p5.colorMode('hsb')
    colorMap = range(0, N).map(() => p5.random(366))
  }

  const draw = (p5: p5Types) => {
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
      p5.rect(0, 0, radius, radius, 10, 10, 10, 10)
      p5.pop()
    })
    p5.pop()
  }

  return <Sketch setup={setup} draw={draw} />
}
