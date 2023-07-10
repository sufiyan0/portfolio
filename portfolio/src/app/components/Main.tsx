import React from 'react'
import Image from 'next/image'
import mypic from '../../../public/mypic.jpg'

const main = () => {
  return (
    <div id='home' className=' p-6 ms:p-16 flex min-h-screen bg-slate-700 w-full'>

      <div className="flex flex-row flex-wrap my-28 items-center justify-center mx-auto">
        <div className="text-zinc-200 max-w-[600px] pr-6 items-end justify-end ">
          <p className='text-xl md:text-2xl'>Hello, I'm</p>
          <h1 className='text-4xl md:text-6xl leading-[100px] text-cyan-400 animate-fade-right animate-once animate-duration-[1500ms] animate-delay-300 animate-ease-linear '>Sufiyan Ahmed</h1>
          <h2 className='text-2xl md:text-4xl animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-linear'>A <span className='text-cyan-200  '> Fruntend Developer</span> From <span className='text-cyan-600'> Panaverse</span></h2>
          <p className='text-xl md:text-2xl mt-6 animate-flip-up animate-once animate-duration-1000 animate-delay-300 animate-ease-linear'>I'm Fruntend Developer based in Panaverse, and I'm very passionate and dedicated to my work.</p>
          <button className='border-2 rounded-md px-6 py-3 my-6 cursor-pointer hover:scale-105 text-cyan-400 font-semibold text-[16px] md:text-[18px] border-cyan-400 animate-flip-up animate-once animate-duration-1000 animate-delay-300 animate-ease-linear'>About Me</button>
        </div>
        <div className="  object-cover z-0 ">

          <Image height={620} src={mypic} alt='my picture' className='rounded-3xl animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-linear' />
        </div>


      </div>





    </div>
  )
}

export default main