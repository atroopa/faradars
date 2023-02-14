import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import Social from './Social';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick   = () => setNav(!nav);

  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white'>
        <div >
            <img src={Logo} alt='logo' className='w-[50px]' />
        </div>

        <ul className='hidden md:flex'>
            <li>تماس</li>
            <li>پروژه ها</li>
            <li>مهارت ها</li>
            <li>درباه</li>
            <li>خانه</li>
        </ul>


        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {
                !nav ? <FaBars/> : <FaTimes/>
            }
        </div>


        <div
        className={
            !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
            }
        >
            <ul>
                <li className='py-6 text-4xl'>تماس</li>
                <li className='py-6 text-4xl'>پروژه ها</li>
                <li className='py-6 text-4xl'>مهارت ها</li>
                <li className='py-6 text-4xl'>درباه</li>
                <li className='py-6 text-4xl'>خانه</li>
            </ul>
        </div>
        <Social/>
    </div>
  );
}

export default Navbar;