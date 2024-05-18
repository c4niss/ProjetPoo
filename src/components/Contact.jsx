import React from 'react'
import SearchBar from './Searchbar'
import Image from '../assets/contact.jpg'
import { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from './Footer';
import BeforeFooter from './Beforefooter';
function Contact() {
  const [message,setmessage] = useState('');
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const handelnamechange=(e)=>{
    setname(e.target.value);
  }
  const handelemailchange=(e)=>{
    setemail(e.target.value);
  }
  const handelmessagechange=(e)=>{
    setmessage(e.target.value);
  }
  return (
    <div>
      <SearchBar/>
      <img src={Image} alt="signup" className='bg-conver bg-no-repeat flex justify-center text-center h-[300px] w-full absolute ' />
      <div className='flex flex-col justify-center relative text-white ml-20'>
        <h1 className='text-5xl mt-20 mb-3 font-serif'>Contact Us</h1>
        <p className=' text-xl mb-56'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
      </div>
      <div className='flex flex-col justify-center mx-[100px] mb-10'>
        <h1 className='text-blue-950 ml-20 text-[25px] font-bold'>Get in Touch</h1>
        <div className=' grid grid-flow-row gap-10 md:grid-flow-col mt-6'>
          <div className='flex flex-1 flex-col justify-center'>
            <input type='text'
             placeholder='Enter Message'
             className='outline-none border-2 px-4 pb-28 pt-2  '
             value={message}
             onChange={handelmessagechange}
             />
             <div className=' flex flex-row mt-6 gap-5'>
               <input type='text'
                placeholder='Enter Name'
                className='outline-none border-2 px-4  py-2'
                value={name}
                onChange={handelnamechange}
                />
               <input type='text'
                placeholder='Enter Email'
                className='outline-none border-2  px-4 py-2'
                value={email}
                onChange={handelemailchange}
                />
             </div>
             <input type=''
             placeholder='Enter Subject'
             className='outline-none border-2 px-4 py-3 mt-6'
             />
             <button className='bg-white border-2 hover:bg-blue-400 hover:text-white text-blue-400 border-blue-400 mt-6 mr-[561px] px-10 py-4'
             onClick={()=>{
               console.log(message,name,email)
             }}>Send</button>

          </div>

          <div className='flex flex-col gap-3 flex-1'>
            <div className='flex flex-row justify-center align-top gap-3  '>
            <FaHouse size={'25px'}/>
            <div>
            <h3 className='text-slate-800 font-bold'>El Achour, algeria</h3>
            <h6 className=' font-thin text-[12px]'>ADLL 527 logement</h6>
            </div>
            </div>
            <div className='flex flex-row justify-center align-top gap-3  '>
            <IoIosPhonePortrait size={'25px'}/>
            <div>
            <h3 className='text-slate-800 font-bold'>+231 (67) 555 9586</h3>
            <h6 className=' font-thin text-[12px]'>Mon to Fri 9am to 6pm</h6>
            </div>
            </div>
            <div className='flex flex-row flex-1 justify-center align-top gap-3  '>
            <MdOutlineMailOutline size={'25px'}/>
            <div>
            <h3 className='text-slate-800 font-bold'>saintcompany@gmail.com</h3>
            <h6 className=' font-thin text-[12px]'>Send us your query anytime!</h6>
            </div>
            </div>
          </div>
        </div> 
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  )
}

export default Contact