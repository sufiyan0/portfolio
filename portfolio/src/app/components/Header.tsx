'use client'
import React from 'react'
import { data } from '../matadata/data'
import menu from '../../../public/menu.svg'
import close from '../../../public/close.svg'
import Image from 'next/image'


const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className='static' >
      <div className="static w-full bg-slate-900 items-center justify-center h-20 navbar ">

        <div className='flex  max-w-[1280px]  text-white justify-between items-center font-semibold text-lg p-6 mx-auto'>
          <div className="text-2xl leading-4">Portfolio</div>
          <div className="hidden md:flex space-x-8 cursor-pointer ">
            {data.map(nav => (

              <a key={nav.id} href={`#${nav.id}`}>{nav.name}</a>
            ))}
          </div>

          <div className="flex flex-1 md:hidden justify-end items-center">

            <Image src={toggle ? close : menu}
              alt="meny"
              className='sm:h-[28px] w-[28px] object-center'
              onClick={() => setToggle((prev) => !prev)}
            />

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

              <ul className='list-none flex sm:hidden flex-col justify-end items-center flex-1'>
                {data.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins font-normal text-white cursor-pointer text-[16px] ${index === data.length - 1 ? 'mb-0' : 'mb-4'}`}>
                    <a href={`#${nav.id}`}>{nav.name}</a>

                  </li>
                ))}

              </ul>
            </div>




          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header