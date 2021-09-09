import Link from 'next/link'
import { useRouter } from 'next/router'

export interface BreadcrumbProps {}

export const Breadcrumbs: React.FC<BreadcrumbProps> = (props) => {
  const router = useRouter()
  const fragments = router.asPath.split('/').filter((s) => s.length)
  const crumbs = [
    '/',
    ...fragments.reduce<string[]>(
      (prev, curr) => [...prev, `${prev}/${curr}`],
      []
    )
  ].slice(0, fragments.length)

  return (
    <ul
      className='text-gray-500 list-none flex p-0 m-0 mb-0'
      aria-details='breadcrumbs'
    >
      {crumbs.map((fragment, index) => (
        <li key={fragment}>
          {index > 0 && (
            <span aria-hidden className='px-1'>
              /
            </span>
          )}
          <Link href={fragment}>
            <a>
              {fragment.split('/').reverse().shift()}
              {fragment === '/' && 'root'}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
