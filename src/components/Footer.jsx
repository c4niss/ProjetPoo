import React from 'react'
import SearchBar from './Searchbar'
import Home from './Home'
import Property from './Property'
import Image from '../assets/about.jpg'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image1 from '../assets/about1.jpg'
import Image2 from '../assets/about2.jpg'
function Footer() {
  return (
    <div className='flex flex-col ml-28 mb-10 sm:flex-col lg:flex-row justify-between'>
        <div className='flex flex-col flex-1 mt-20'>
          <Link to='/' className='text-3xl font-bold text-blue-950 mb-5'>saintcompany</Link>
          <p className='text-[15px] mb-5'>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
          <div className=' flex flex-row gap-4'>
          <CiFacebook size={'20px'}/>
          <FaGithub size={'20px'}/>
          <FaInstagram size={'20px'}/>
          </div>
        </div>
        <div className='flex flex-col flex-1 mt-20'>
          <div className='text-2xl font-bold text-blue-950 mb-5'>Navigation</div>
          <div className='flex flex-col'>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Home</Link>
            <Link to='/about' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>About</Link>
            <Link to='/property' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>property</Link>
            <Link to='/contact' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Contact</Link>
          </div>
        </div>
        <div className='flex flex-col flex-1 mt-20'>
          <div className='text-2xl font-bold text-blue-950 mb-5'>Services</div>
          <div className='flex flex-col'>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Drone Mapping</Link>
            <Link to='/about' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Real State</Link>
            <Link to='/property' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Commercial</Link>
            <Link to='/contact' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Construction</Link>
          </div>
        </div>
        <div className='flex flex-col flex-1 mt-20'>
          <div className='text-2xl font-bold text-blue-950 mb-5'>Navigation</div>
          <div className='flex flex-col'>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Home</Link>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>About</Link>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>property</Link>
            <Link to='/' className='text-[15px] mb-5 hover:text-gray-400 hover:underline'>Contact</Link>
          </div>
        </div>
      </div>
  )
}

export default Footer