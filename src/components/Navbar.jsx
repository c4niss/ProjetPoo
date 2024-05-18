import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBar() {
    const [toggle, setToggle] = useState(false);
 
  return (
    <nav  className=" bg-gradient-to-r from-blue-950 to-blue-950 text-white flex justify-between p-4 w-full mb-0 top-0">  {/* Added w-full for full width */}
      <div className="flex items-center ">
        <Link to="/" className="text-xl font-bold mr-20" >SaintCompany</Link>
        <ul className=' space-x-10 list-none hidden sm:flex flex-row gap-1 '>
        <li><Link to="/" className="hover:text-gray-200 hover:underline">Home</Link></li>
        <li><CustomLink to="/Property" className="hover:text-gray-200 hover:underline cursor-pointer">Property</CustomLink></li>
        <li><CustomLink to="/About" className="hover:text-gray-200 hover:underline cursor-pointer">About</CustomLink></li>
        <li><CustomLink to="/Contact" className="hover:text-gray-200 hover:underline cursor-pointer">Contact</CustomLink></li>
        </ul>
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
      {toggle ? (
        <IoClose size="2rem" cursor="pointer" onClick={() =>{
            setToggle(!toggle)  
        }} />
      ) : (
        <GiHamburgerMenu size="2rem" cursor="pointer" onClick={() =>{
            setToggle(!toggle)
        }} />
      )}
      <div className={`${!toggle ? 'hidden' : 'flex' }
       p-4 bg-gray-400 text-black absolute top-16 right-0 min-w[140px] z-10 w-60 rounded-tl-xl rounded-bl-xl flex flex-col h-screen`}>
        <h2 className=' font-bold text-2xl text-center mb-8 underline'>Menu</h2>
        <ul className=' list-none flex items-start flex-col gap-10 mx-5 '>
        <li><Link to="/" className="hover:text-gray-200 hover:underline font-bold">Home</Link></li>
        <li><CustomLink to="/Property" className="hover:text-gray-200 hover:underline cursor-pointer font-bold">Property</CustomLink></li>
        <li><CustomLink to="/About" className="hover:text-gray-200 hover:underline cursor-pointer font-bold">About</CustomLink></li>
        <li><CustomLink to="/Contact" className="hover:text-gray-200 hover:underline cursor-pointer font-bold">Contact</CustomLink></li>
        <li><CustomLink to="/Signup" className="hover:text-gray-200 font-bold">Sign up</CustomLink></li>
        </ul>

      </div>
      </div>
      <ul className="flex space-x-4">
        <li className="hidden lg:flex bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-teal-100 underline cursor-pointer font-bold">Call Us: +231 (67) 555 9586</li>
        <li className='hidden sm:flex border px-4 py-2 rounded-md bg-white text-blue-900 font-bold  '><CustomLink to="/Signup" className="hover:text-gray-200">Sign up</CustomLink></li>
      </ul>
    </nav>
  );
}

// Corrected CustomLink component (unchanged)
function CustomLink({ to, children, ...props }) {
  return (
    <li className={window.location.pathname === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
