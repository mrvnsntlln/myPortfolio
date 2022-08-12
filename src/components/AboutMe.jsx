import React, {useEffect} from "react";
import Aos from "aos";

const AboutMe = () =>{
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);

    return(
        <div id="about" className="w-full min-h-[755px] mx-auto flex flex-col justify-evenly items-center bg-white ">
            <div className="flex flex-col mt-16 md:mt-4" data-aos='fade-in'>
                <p className=" mx-4 text-6xl font-bold text-center">About Me</p>
                <p className="text-center md:mx-48 mx-3 mb-3 text-xl mt-10">With a passion for computer programming and web designing. I have the skill set necessary to dive deep into the IT industry. As an upbeat, self-motivated team player with excellent communication, I envision an exciting future in the industry. Browse my portfolio to see all that I have to offer.</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-evenly items-center mb-6 ">
                <div className="h-[80%] md:w-[450px] w-[350px] shadow-lg shadow-green-700 bg-primary rounded-3xl text-start text-white p-10 my-5 mx-5" data-aos='zoom-in-right'>
                    <p className="text-center text-4xl font-bold">Education</p>
                    <div className="vl mt-5 p-3">
                        <div className="flex flex-row">
                            <p className="mx-2"><i className="fa-solid fa-graduation-cap"></i></p>
                            <p className="text-lg">Bachelor of Science in Computer Engineering</p>
                        </div>
                        <div className="flex flex-row ml-7">
                            <p className="text-lg ml-2">San Sebastian College Recoletos- de Cavite</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-location-dot"></i></p>
                            <p className="text-lg ml-2">Cavite City, Cavite</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-calendar-days"></i></p>
                            <p className="text-lg ml-1">June 2014 - April 2019</p>
                        </div>
                    </div>
                    <div className="vl mt-5 p-3">
                        <div className="flex flex-row">
                            <p className="mx-2"><i className="fa-solid fa-graduation-cap"></i></p>
                            <p className="text-lg">Front-End Web Development</p>
                        </div>
                        <div className="flex flex-row ml-7">
                            <p className="text-lg ml-2">KodeGo</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-location-dot"></i></p>
                            <p className="text-lg ml-2">Philippines</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-calendar-days"></i></p>
                            <p className="text-lg ml-1">April 2022 - August 2022</p>
                        </div>
                    </div>
                </div>
                <div className="h-[80%] md:w-[450px] w-[350px] shadow-lg shadow-green-700 bg-primary rounded-3xl text-start text-white p-10 my-5 mx-5" data-aos='zoom-in-left'>
                    <p className="text-center text-4xl font-bold">Experience</p>
                    <div className="vl mt-5 p-3">
                        <div className="flex flex-row">
                            <p className="mx-2"><i className="fa-solid fa-briefcase"></i></p>
                            <p className="text-lg">Project Design Engineer</p>
                        </div>
                        <div className="flex flex-row ml-7">
                            <p className="text-lg ml-1">Union Sunnytech and Exponents Incorporation</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-location-dot"></i></p>
                            <p className="text-lg ml-2">Bacoor City, Cavite</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-calendar-days"></i></p>
                            <p className="text-lg ml-1">July 2019 - Feb 2020</p>
                        </div>
                    </div>
                    <div className="vl mt-5 p-3">
                        <div className="flex flex-row">
                            <p className="mx-2"><i className="fa-solid fa-briefcase"></i></p>
                            <p className="text-lg">Senior Project Design Engineer</p>
                        </div>
                        <div className="flex flex-row ml-7">
                            <p className="text-lg ml-1">Hubei Junxinda International Technology</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-location-dot"></i></p>
                            <p className="text-lg ml-2">Bacoor City, Cavite</p>
                        </div>
                        <div className="flex flex-row mt-3">
                            <p className="mx-2"><i className="fa-solid fa-calendar-days"></i></p>
                            <p className="text-lg ml-1">February 2020 - May 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;