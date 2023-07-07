import React from 'react'
import { data } from '../matadata/data'

const Header = () => {
  return (
    <nav>
      <div className=" fixed w-full bg-slate-900 items-center justify-center content-center ">

        <div className='flex  max-w-[1280px]  text-white justify-between items-center font-semibold text-lg p-6 mx-auto'>
          <div className="text-2xl leading-4">Portfolio</div>
          <div className="hidden md:flex space-x-8 cursor-pointer ">
            {data.map(nav => (

              <a key={nav.id} href={`#${nav.id}`}>{nav.name}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header