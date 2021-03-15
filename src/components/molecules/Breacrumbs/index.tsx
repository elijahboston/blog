import Link from 'next/link'
import { Anchor } from '~/components/atoms/Anchor'

interface BreadCrumbChild {
  href: string
  label: string
}

interface BreadCrumbsProps {
  crumbs?: BreadCrumbChild[]
}

export const BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  const { crumbs } = props
  return (
    <div className='mt-10'>
      {crumbs.map((crumb, index) => (
        <>
          <Link href={crumb.href}>
            <Anchor href={crumb.href}>{crumb.label}</Anchor>
          </Link>
          {!!(index !== crumbs.length - 1) && ' > '}
        </>
      ))}
    </div>
  )
}
