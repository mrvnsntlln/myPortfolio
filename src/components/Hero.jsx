import Aos from "aos";
import React, {useEffect} from "react";
import Typed from 'react-typed'

const Hero = () =>{
    useEffect(()=>{
        Aos.init({once: true});
    }, []);

    return(
        <div className="bg-[#D0C9C0] p-5">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center" data-aos='fade-in'>
                <img src="/img/bw_image.jpg" className=" mt-24 md:mt-12 h-72 w-72 rounded-full" alt="Marvin"/>
                <p className="text-lg mt-6 font-bold">Hi! My name is</p>
                <p className=" text-2xl md:text-4xl font-black">Marvin De Vera Santillan</p>
                <div className="p-4 flex md:flex-row flex-col justify-center items-center text-7xl">
                    <p className="text-2xl md:text-7xl">I code to</p>
                    <Typed className=" pl-0 md:pl-5 text-green-900 " strings={['CREATE', 'DEVELOP', 'DESIGN', 'LEARN']} typeSpeed={120} backSpeed={120} loop></Typed>
                </div>
                <button className=" bg-black text-white w-[150px] rounded-md my-3 mx-auto py-1">View Resume</button>
            </div>
        </div>
    )
}

export default Hero;