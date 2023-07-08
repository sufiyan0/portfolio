import React from 'react'
import Image from 'next/image'
import project1 from '../../../public/proj.png'
import project2 from '../../../public/Screenshot (21).png'

const Projects = () => {
  return (
    <div id='projects' className=' bg-slate-700 items-center justify-center  min-h-screen  '>
      <div className="flex lg:flex-row flex-col  items-center justify-center ">


        <div className="p-6 max-w-[700px] max-h-[600px] md:mt-28">
          <Image className='object-contain overflow-hidden md:mr-24 rounded-3xl' src={project1} alt='' />
        </div>
        <div className="max-w-[500px] min-w-[280px] p-8">
          
          <h1 className='text-slate-200 text-[34px] font-semibold md:text-[52px]'>HooBank</h1>
          <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto architecto corporis ullam natus maiores eveniet. Minus assumenda est ullam quaerat saepe. Id saepe ipsum deleniti porro unde voluptatum architecto corporis nihil, deserunt dolores. Dolores voluptatum corporis harum repellat, delectus neque reiciendis id eaque illo, aspernatur distinctio voluptatem! Quod, atque saepe.</p>
          <button className='border-2 rounded-md px-6 py-3 my-6 cursor-pointer hover:scale-105 text-cyan-400 font-semibold text-[16px] md:text-[18px] border-cyan-400 '> <a href="https://typescript-projectes-kx63.vercel.app/">View Project</a></button>
        </div>

      </div>
      <div className="flex lg:flex-row flex-col  items-center justify-center">

        
        <div className="max-w-[500px] min-w-[280px] p-8 mr-8 ">
          
          <h1 className='text-slate-200 text-[34px] font-semibold md:text-[52px] '>loopstudios</h1>
          <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto architecto corporis ullam natus maiores eveniet. Minus assumenda est ullam quaerat saepe. Id saepe ipsum deleniti porro unde voluptatum architecto corporis nihil, deserunt dolores. Dolores voluptatum corporis harum repellat, delectus neque reiciendis id eaque illo, aspernatur distinctio voluptatem! Quod, atque saepe.</p>
          <button className='border-2 rounded-md px-6 py-3 my-6 cursor-pointer hover:scale-105 text-cyan-400 font-semibold text-[16px] md:text-[18px] border-cyan-400 '> <a href="https://typescript-projectes-4djseg60w-sufiyan0.vercel.app/">View Project</a></button>
        </div>
        <div className="p-6 max-w-[700px] max-h-[600px]">
          <Image className='object-contain overflow-hidden  rounded-3xl' src={project2} alt='' />
        </div>

      </div>

    </div>


  )
}

export default Projects