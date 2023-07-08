import React from 'react'
import Image from 'next/image'
import logo from '../../../public/mypic.jpg'
const About = () => {
    return (
        <div id='about' className=' bg-gray-800 items-center justify-center '>
            <div className="flex lg:flex-row flex-col  items-center justify-center min-h-screen">
               <div className="p-6">
                <Image className='object-contain overflow-hidden md:mr-24 rounded-3xl' src={logo} alt='' />
               </div>
                <div className="max-w-[500px] min-w-[280px] p-8">
                    <p className='text-red-700 font-semibold text-[18px] md:text-[22px] '>I'm a Developer</p>
                    <h1 className='text-slate-200 text-[34px] font-semibold md:text-[52px]'>I Can Develope Anything You Want </h1>
                    <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto architecto corporis ullam natus maiores eveniet. Minus assumenda est ullam quaerat saepe. Id saepe ipsum deleniti porro unde voluptatum architecto corporis nihil, deserunt dolores. Dolores voluptatum corporis harum repellat, delectus neque reiciendis id eaque illo, aspernatur distinctio voluptatem! Quod, atque saepe.</p>
                    <button className='border-2 rounded-md px-6 py-3 my-6 cursor-pointer hover:scale-105 text-cyan-400 font-semibold text-[16px] md:text-[18px] border-cyan-400 '>About Me</button>
                </div>

            </div>




        </div>
    )
}


export default About