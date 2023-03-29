import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
  return (
    <div className='bg-[#1C2B35] h-[80px] text-white flex justify-between items-center lg:px-24'>
      <img src={logo} alt="" className='max-w-fit'/>
      <div className='flex gap-x-1 md:gap-x-2 lg:gap-x-4'>
        <li className='list-none'><a href="">Order</a></li>
        <li className='list-none'><a href="">Order-Review</a></li>
        <li className='list-none'><a href="">Manage Inventory</a></li>
        <li className='list-none'><a href="">Login</a></li>
      </div>
    </div>
  );
};

export default Header;