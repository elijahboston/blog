import React, { useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import { Mesh } from "three"

const Box: React.FC<{ position: [number, number, number] }> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[3, 3, 3]}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#676767" : "white"}
      />
    </mesh>
  )
}
export const ThreeCube: React.FC<{}> = () => {
  // const rotatingCube = useMemo(
  //   () => (
  //     <Canvas colorManagement>
  //       <ambientLight intensity={0.2} />
  //       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  //       <pointLight position={[-10, -10, -10]} />
  //       <Box position={[0, 0, 0]} />
  //     </Canvas>
  //   ),
  //   []
  // )
  return (
    <div className="cube-container" aria-hidden="true">
      <div className="cube-scene">
        <div className="cube">
          <div className="cube__face cube__face--front"></div>
          <div className="cube__face cube__face--back"></div>
          <div className="cube__face cube__face--right"></div>
          <div className="cube__face cube__face--left"></div>
          <div className="cube__face cube__face--top"></div>
          <div className="cube__face cube__face--bottom"></div>
        </div>
      </div>
    </div>
  )
}
