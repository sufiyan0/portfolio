// import React from 'react'
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera } from '@fortawesome/free-solid-svg-icons'

// library.add(faCamera)

// const camera = icon({ prefix: 'fas', iconName: 'camera' })

{/* <script src="https://example.com/fontawesome/v6.4.0/js/all.js" data-auto-replace-svg></script>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */}
const Contact = () => {
    return (
        <div id='contact' className='flex flex-col bg-slate-800 p-8 md:p-6 min-h-screen items-center justify-center'>

            <div className="flex flex-col text-center item-center max-w-2xl justify-center mx-auto ">
                <h3 className='text-red-600 text-[18px] md:text-[22px] font-semibold justify-center '>Contact me</h3>
                <h1 className='text-slate-200 text-[30px] md:text-[44px]'>I Want To Hear From You</h1>
                <p className='text-gray-400 text-lg my-2'>Please fill out the form from this section to contact with me. or call between 9:00 p.m. and 8.00p.m. Monday through Friday</p>
            </div>

            <div className="flex flex-col mt-16 bg-transparent item-center mx-auto max-w-6xl justify-center mx-auto">
                <div className="flex bg-transparent  flex-wrap">

                    <input className="bg-transparent border-2 border-slate-400 px-3 md:px-6 py-1 md:py-2 m-1 md:m-2 rounded-lg text-white text-lg" type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" className="bg-transparent border-2 border-slate-400 text-white text-lg px-3 md:px-6 py-1 md:py-2 m-1 md:m-2 rounded-lg" />
                </div>
                <div className="flex  flex-wrap">
                    <input type="number" placeholder="Your Phone" className="bg-transparent border-2 text-white text-lg border-slate-400 px-3 md:px-6 py-1 md:py-2 m-1 md:m-2 rounded-lg" />
                    <input type="text" placeholder="Subject" className="bg-transparent border-2 text-white text-lg border-slate-400 px-3 md:px-6 py-1 md:py-2 m-1 md:m-2  rounded-lg" />
                </div>
                <div className="overflow-hidden object-contain w-full">
                    <textarea className="bg-transparent  border-2 border-slate-400 px-3 md:px-6 py-1 md:py-2   rounded-lg text-white text-lg m-2 w-[98%] h-[150px]" name="query"  placeholder="Write Your massage Here"></textarea>
                </div>
                <button className='border-2 rounded-md items-start px-6 py-3 my-6 cursor-pointer hover:scale-105 text-cyan-400 font-semibold text-[16px] md:text-[18px] border-cyan-400 '> <a href="https://typescript-projectes-kx63.vercel.app/">View Project</a></button>
            </div>
        </div>


    )
}

export default Contact