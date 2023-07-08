import React from 'react'
import Image from 'next/image'
import i1 from '../../../public/1.png'
import i2 from '../../../public/2.png'
import i3 from '../../../public/3.png'
import img1 from '../../../public/target.svg'
import img2 from '../../../public/brush.svg'
import img3 from '../../../public/energy.svg'


const Offer = () => {
    return (
        <div className= 'flex bg-slate-600 min-h-[50vh] items-center justify-center '>

            <div className="flex flex-wrap item-center justify-center mx-auto ">



                <div className="h-[420px] max-w-[350px] min-w-[280px] text-gray-300 m-8 lg:mt-20 px-6">


                    <span className='flex items-center justify-center '>
                        <Image className='z-1' src={i1} alt='' height={100} />
                        <Image className=' absolute mt-[1px]' src={img1} alt='' height={70} />
                    </span>

                    <div className="flex justify-center text-2xl my-6">
                        <h3>Pixel Perfect</h3>
                    </div>
                    <div className="content-center text-center ">
                        <p className='text-sm md:text-lg' >
                            Most common methods for  developing website that work well on desktop is responsive and attractive in both in mobile and laptop .
                        </p>
                    </div>
                </div>
                <div className="h-[420px] w-[350px] min-w-[280px]  text-gray-300 m-8 lg:mt-20 p-6">

                    <span className='flex items-center justify-center '>
                        <Image className='z-1' src={i2} alt='' height={100} />
                        <Image className=' absolute mt-[1px]' src={img2} alt='' height={70} />
                    </span>

                    <div className="flex justify-center text-2xl my-6">
                        <h3>High Quality</h3>
                    </div>
                    <div className="content-center text-center ">
                        <p className='text-sm md:text-lg'>
                            Most Importent to make website wiht high quality frameworks like next or react and make it attractive in all devices.
                        </p>
                    </div>
                </div>
                <div className="h-[420px] w-[350px] min-w-[280px] text-gray-300 m-8 lg:mt-20 p-6 ">

                    <span className='flex items-center justify-center '>
                        <Image className='z-1' src={i3} alt='' height={100} />
                        <Image className=' absolute mt-[1px]' src={img3} alt='' height={70} />
                    </span>

                    <div className="flex justify-center text-2xl my-6">
                        <h3>Awesome Ideas</h3>
                    </div>
                    <div className="content-center text-center ">
                        <p className='text-sm md:text-lg m-4'>
                            Most Importent to make website wiht high quality frameworks like next or react and make it attractive in all devices.
                        </p>
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Offer