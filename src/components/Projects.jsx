import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import Aos from 'aos'

const Projects = () => {
    useEffect(()=>{
        Aos.init({once: true});
    }, []);

  return (
    <div id='projects' className=' w-full flex lg:flex-row flex-col p-2 md:p-10'>
        <div className='flex md:flex-col flex-row justify-center items-end w-300px md:w-[450px] m-5 lg:my-0' data-aos="fade-in">
            <p className='text-4xl font-semibold hidden lg:block md:mr-56'>My</p>
            <p className='text-7xl font-bold'>Projects</p>
        </div>
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            data-aos="zoom-in-left"
        >
        
            <SwiperSlide className=' bg-primary flex flex-col'>
                <div className='flex flex-row gap-2'>
                    <a href='https://mrvnsntlln.github.io/'><i className='fa-solid fa-eye fa-beat-fade'></i></a>
                    <p className='text-lg font-bold'>View Website</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 lg:p-3 lg:mt-10'>
                    <img src="/img/firstPort.PNG" alt="adventour" className='rounded-3xl h-[170px] w-[270px] lg:h-[300px] lg:w-[300px]'/>
                    <img src="/img/secondPort.PNG" alt="adventour" className='rounded-3xl h-[170px] w-[270px] lg:h-[300px] lg:w-[300px]'/>
                </div>
                <div>
                    <p className='text-center text-xl'>-Multipage Responsive Website-</p>
                    <p>Technologies used:</p> 
                    <p className='ml-10'>HTML, CSS, Bootstrap, Git, Github</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-gray-600 '>
                <div className='flex flex-row gap-2'>
                    <a href='https://calculator-web-mrvnsntlln.vercel.app/'><i className='fa-solid fa-eye fa-beat-fade'></i></a>
                    <p className='text-lg font-bold'>View Website</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 lg:p-3 lg:mt-10'>
                    <img src="/img/calc1.PNG" alt="adventour" className='rounded-3xl h-[170px] w-[270px] lg:h-[300px] lg:w-[500px]'/>
                    {/* <img src="/img/calc2.PNG" alt="adventour" className='rounded-3xl h-[170px] w-[270px] lg:h-[300px] lg:w-[300px]'/> */}
                </div>
                <div>
                    <p className='text-center text-xl'>-Calculator React Website-</p>
                    <p>Technologies used:</p> 
                    <p className='ml-10'>React, Tailwind, Git, Github, Vercel</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-primary '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-gray-600 '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-primary '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-gray-600 '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-primary '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-gray-600 '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
            <SwiperSlide className=' bg-primary '><button><i className='fa-solid fa-eye'></i></button></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects;
