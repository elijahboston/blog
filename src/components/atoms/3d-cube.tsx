import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

const Box: React.FC<{ position: [number, number, number] }> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.x = mesh.current.rotation.y
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[3, 3, 3]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial
        attach='material'
        color={hovered ? '#676767' : 'white'}
      />
    </mesh>
  )
}

export const ThreeCube: React.FC<Record<string, unknown>> = () => {
  const rotatingCube = useMemo(
    () => (
      <Canvas colorManagement>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    ),
    []
  )

  return rotatingCube
}
