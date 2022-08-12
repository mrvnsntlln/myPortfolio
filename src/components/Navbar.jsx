import React, {useState} from "react";


const Navbar = () =>{
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className=" bg-black fixed top-0 right-0 left-0 z-20">
            <div className=" flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white">
                <div className="flex flex-row">
                    <div className="mt-1 mr-1"><i className="fa-brands fa-teamspeak text-4xl font-black"></i></div>
                    <div className="flex flex-col">
                        <a href="#" className="w-full text-xl font-bold text-center">Marvin Santillan</a>
                        <a href="#" className=" text-center text-sm">Software Engineer</a>
                    </div>
                </div>
                <ul className=" hidden md:flex">
                    <li className="p-4"><a href='#'>Home</a></li>
                    <li className="p-4"><a href='#about'>About</a></li>
                    <li className="p-4"><a href='#skills'>Skills</a></li>
                    <li className="p-4"><a href='#projects'>Projects</a></li>
                    <li className="p-4"><a href='#contact'>Contact</a></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <i className="fa-solid fa-bars text-3xl"></i> : <i className="fa-solid fa-xmark text-3xl"></i>}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%] '}>
                    <div className="m-4 flex flex-col">
                        <a href="#" className="w-full text-xl font-bold text-center">Marvin Santillan</a>
                        <a href="#" className=" text-center text-sm">Software Engineer</a>
                    </div>
                    <ul className=" uppercase p-4">
                        <li className="p-4 border-b border-gray-600"><a href='#'>Home</a></li>
                        <li className="p-4 border-b border-gray-600"><a href='#about'>About</a></li>
                        <li className="p-4 border-b border-gray-600"><a href='#skills'>Skills</a></li>
                        <li className="p-4 border-b border-gray-600"><a href='#projects'>Projects</a></li>
                        <li className="p-4"><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;