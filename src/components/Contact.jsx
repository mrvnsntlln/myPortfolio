import React, {useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import Aos from 'aos'

const Contact = () => {

    useEffect(()=>{
        Aos.init({once: true});
    }, []);

    const form = useRef()
   
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_esevb8d', 'template_rxpa0ii', form.current, 'qjsY-yeWyRsdAtFX8')
          .then((result) => {
            swal({
                title: "Thank you!",
                text: "You submitted a message!",
                icon: "success",
                button: "Close",
                width: 200,
              });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
    <div id='contact' className='flex md:flex-row flex-col items-center justify-center min-h-screen w-full  bg-gray-800 md:relative p-10'>
        <div className='flex flex-col items-start justify-center bg-gray-400 h-[600px] w-[400px] md:w-[500px] p-10 rounded-3xl md:absolute md:left-72 my-4 md:my-0' data-aos="fade-right">
            <p className='text-5xl font-black'>Message Me!</p>
            <div className='flex flex-col justify-start font-bold'>
                <div className='flex flex-row text-xl mt-2'>
                    <p>Always feel free to send me a message</p>
                    <span><i className="fa-solid fa-message fa-shake ml-3 text-4xl"></i></span>
                </div>
                <div className='flex flex-row text-xl mt-3'>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <p className='ml-3'>mrvnsntlln10@gmail.com</p>
                </div>
                <div className='flex flex-row text-xl mt-3'>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <p className='ml-3'>09975730703</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-start h-[500px] w-[400px] bg-black p-10 rounded-3xl md:absolute md:left-[740px] my-4 md:my-0' data-aos="fade-left">
            <form ref={form}
                onSubmit= {sendEmail}
                className='ml-1 text-white flex flex-col justify-start items-start gap-y-4 w-full'>
                <p className='text-2xl font-bold'>GET IN TOUCH</p>
                <input type="text" name='from_name' placeholder='Your Name' className='rounded-md w-full p-2 text-black' required/>
                <input type="email" name='user_email' placeholder='Email Here' className='rounded-md w-full p-2 text-black' required/>
                <input type="text" name='user_phone' placeholder='Contact Number' className='rounded-md w-full p-2 text-black' required/>
                <textarea name="message" rows="4" placeholder='How I can help you?' className='rounded-md w-full p-2 text-black'></textarea>
                <button type='submit' className='rounded-md bg-green-700 hover:bg-green-500 focus:ring-green-300 focus:outline-none hover:-translate-y-0.5 transform transition p-2 w-20 self-center'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact