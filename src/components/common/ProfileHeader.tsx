import dynamic from "next/dynamic"

const CubeDynamic = dynamic<{}>(() => import("./Cube").then((mod) => mod.Cube))

export const ProfileHeader: React.FC<{}> = () => (
  <header className="flex flex-col justify-center items-center pt-12">
    {/* <img
      src="/self.jpeg"
      className="rounded-full w-1/2 h-1/2 md:w-1/6 md:h-1/6 pt-4 pb-4"
    /> */}
    <CubeDynamic />
    <h1 className="text-3xl md-text-5xl text-white">Elijah Boston</h1>
    <h2 className="text-gray-600">Full Stack Engineer</h2>
  </header>
)
