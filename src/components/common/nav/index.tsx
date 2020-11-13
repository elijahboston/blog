import SvgClose from 'components/icons/close'
import SvgMenu from 'components/icons/menu'
import React, {useRef, useState} from 'react'
import {NavItems} from './nav-items'

export const Nav: React.FC<{compact?: boolean}> = ({compact}) => {
  const menuRef = useRef<HTMLOListElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <nav
      className={clsx('flex flex-col items-end lg:items-center', {
        'pt-6': !compact
      })}
    >
      {compact && (
        <button
          type="button"
          className="text-white w-8 h-8 flex justify-center items-center lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <SvgClose className="fill-current" />
          ) : (
            <SvgMenu className="fill-current" />
          )}
        </button>
      )}
      {!compact && (
        <ul className="flex flex-row justify-center">
          <NavItems />
        </ul>
      )}
      {compact && (
        <ul
          ref={menuRef}
          className={clsx(
            'transition-height duration-500 ease-in-out overflow-y-hidden lg:flex flex-wrap lg:h-auto',
            {
              'h-32': open,
              'h-0': !open
            }
          )}
        >
          <NavItems />
        </ul>
      )}
    </nav>
  )
}