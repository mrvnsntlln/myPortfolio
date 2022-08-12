import React, {useEffect} from "react";
import Aos from "aos";

const TechStacks = () => {
    useEffect(()=>{
        Aos.init({once: true});
    }, []);

  return (
    <div id="skills" className="flex flex-col flex-no-wrap justify-center items-center bg-[#D0C9C0] min-h-[500px] w-full p-3">
        <div className='self-start ml-10 ' data-aos='fade-down'>
            <p className="text-2xl mt-16 md:mt-14 font-bold">Skills -</p>
            <p className='text-6xl font-extrabold'>Tech Stacks</p>
        </div>
        <div className='flex flex-col md:flex-row flex-no-wrap  my-10 gap-6'>
            
            <div className='flex flex-col md:flex-row flex-wrap gap-6' data-aos='zoom-in-right'>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/html5.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">HTML5</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/css3.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">CSS3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/js-img.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/node-js.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Node JS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/express-js.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Express JS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/vue-js.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Vue JS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/react-js.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">React JS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/saas.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Saas CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            
            <div className='flex flex-col md:flex-row flex-wrap gap-6' data-aos='zoom-in-left'>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/bootstrap.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Bootstrap CSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/tailwind-css.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/mysql.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/mongo-db.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/jquery.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Jquery</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/git.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Git</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row md:flex-col gap-y-4'>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/heroku.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Heroku</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card ">
                        <div className="flip-card-inner ">
                            <div className="flip-card-front flex justify-center items-center rounded-2xl shadow-lg ">
                                <img src="/img/postman.png" alt="Avatar" className="h-16 w-16"/>
                            </div>
                            <div className="flip-card-back flex flex-col justify-center items-center bg-primary text-white rounded-2xl shadow-lg  ">
                                <p className="text-2xl ">Postman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStacks