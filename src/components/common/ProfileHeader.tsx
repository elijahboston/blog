import dynamic from "next/dynamic"
import { CubeProps } from "./Cube"

const CubeDynamic = dynamic<CubeProps>(() =>
  import("./Cube").then((mod) => mod.Cube)
)

export const ProfileHeader: React.FC<{}> = () => (
  <header className="flex flex-col justify-center items-center pt-6 md:pt-12">
    <div className="m-10">
      <CubeDynamic size="lg" />
    </div>

    <h1 className="text-white text-3xl">Elijah Boston</h1>
    <h2 className="text-gray-600 text-2xl">Full Stack Engineer</h2>
  </header>
)
