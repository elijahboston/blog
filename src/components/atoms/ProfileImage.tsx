export interface ProfileImageProps {}

export const ProfileImage: React.FC<ProfileImageProps> = (props) => {
  return (
    <div
      className='rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500'
      style={{ width: 80, height: 80 }}
    />
  )
}
