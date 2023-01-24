import React from 'react';
import { useState } from 'react';
import {FaBar, FaTimes} from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick   = () => setNav(!nav);

  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white'>
        <div >
            <img src={Logo} alt='logo' className='w-[50px]' />
        </div>

        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

    </div>
  );
}

export default Navbar;