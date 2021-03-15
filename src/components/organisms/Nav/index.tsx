import SvgClose from '~/components/icons/close'
import SvgMenu from '~/components/icons/menu'
import { NavItem, NavItemProps } from '~/components/molecules/NavItem'
import { NAV_DATA } from '~/data/nav'
import { useRouter } from 'next/router'
import { useMemo, useRef, useState } from 'react'
import clsx from 'classnames'
import anime from 'animejs'
import Link from 'next/link'

interface NavProps extends React.HTMLAttributes<HTMLElement> {}

export const Nav: React.FC<NavProps> = ({ className }) => {
  const menuRef = useRef<HTMLOListElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const { pathname } = useRouter()
  const [, root] = pathname.split('/')
  const animation = useRef(null)

  const NavItems = useMemo(
    () =>
      NAV_DATA.map((navItem: NavItemProps) => (
        <NavItem
          className='nav-item'
          style={{
            transform: 'translateX(-250px)'
          }}
          key={navItem.label}
          rootPath={root}
          path={navItem.path}
          label={navItem.label}
        />
      )),
    [root]
  )

  const handleClick = () => {
    console.log('Animation', open, animation.current)
    if (open) {
      // Close animation
      anime
        .timeline({
          easing: 'easeInOutQuart',
          duration: 300
        })
        .add({
          targets: '#menu-items .nav-item',
          translateX: [0, 250],
          delay: anime.stagger(100),
          direction: 'reverse'
        })
        .add({
          targets: '#menu-items',
          scale: 0,
          duration: 200
        })
        .add({
          targets: '#progress-bar',
          opacity: 1,
          duration: 200
        })
    } else {
      // Open animation
      anime
        .timeline({
          easing: 'easeInOutQuart',
          duration: 300
        })
        .add({
          targets: '#progress-bar',
          opacity: 0,
          duration: 200
        })
        .add({
          targets: '#menu-items',
          scale: 1,
          duration: 200
        })
        .add({
          targets: '#menu-items .nav-item',
          translateX: [250, 0],
          delay: anime.stagger(100)
        })
    }
    setOpen(!open)
  }

  return (
    <nav className='sticky top-0 z-50'>
      <div className={clsx('overflow-x-hidden bg-backgrounds-nav', className)}>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-8 lg:col-start-3'>
            <div className='flex items-center justify-between p-5 lg:py-5 lg:px-0 w-full'>
              <Link href='/'>
                <a>
                  <h1 className='text-h1 text-black justify-start'>
                    Elijah Boston
                  </h1>
                </a>
              </Link>

              <div className='hidden lg:block'>
                <ul className='flex flex-row'>{NavItems}</ul>
              </div>

              <div className='z-50 lg:hidden flex flex-col items-end'>
                <button
                  id='menu-button'
                  type='button'
                  className={clsx(
                    'text-black flex justify-center items-center p-2 z-50'
                  )}
                  onClick={() => handleClick()}
                >
                  {open && (
                    <SvgClose id='menu-close' className='fill-current' />
                  )}

                  {!open && <SvgMenu id='menu-open' className='fill-current' />}
                </button>

                <ul
                  id='menu-items'
                  ref={menuRef}
                  className={clsx(
                    'border-4 border-gradient border-gradient-purple absolute z-40 py-2 px-2 pt-12 overflow-x-hidden flex flex-col justify-center items-end origin-top-right bg-white'
                  )}
                  style={{
                    transform: 'scale(0)'
                  }}
                >
                  {NavItems}
                </ul>
              </div>
            </div>
            <div
              id='progress-bar'
              className='w-full border-2 border-gradient border-gradient-purple'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
