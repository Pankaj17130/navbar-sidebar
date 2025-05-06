import React from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle, FaTree } from 'react-icons/fa';

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className='bg-amber-900 px-4 py-3 flex justify-between items-center border-b border-amber-700'>
      <div className='flex items-center text-xl'>
        <FaBars
          className='text-amber-100 me-4 cursor-pointer hover:text-amber-300'
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <div className='flex items-center space-x-2'>
          <FaTree className='text-amber-300 w-6 h-6' />
          <span className='text-amber-100 font-semibold tracking-wide'>Qincrarf</span>
        </div>
      </div>

      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-64'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
            <FaSearch className='text-amber-600' />
          </span>
          <input
            type="text"
            placeholder='Find handmade treasures...'
            className='w-full px-4 py-1 pl-10 rounded-lg shadow-sm outline-none bg-amber-100 text-amber-900 placeholder-amber-500 hidden md:block'
          />
        </div>

        <div className='text-amber-100 hover:text-amber-300 cursor-pointer'>
          <FaBell className='w-6 h-6' />
        </div>

        <div className='relative'>
          <button className='text-amber-100 hover:text-amber-300 group'>
            <FaUserCircle className='w-7 h-7' />
            <div className='z-10 hidden absolute bg-amber-100 rounded-lg shadow-lg w-32 group-hover:block right-0 mt-2 border border-amber-200'>
              <ul className='py-2 text-sm text-amber-900'>
                <li className='hover:bg-amber-200 px-4 py-2'><a href="">Profile</a></li>
                <li className='hover:bg-amber-200 px-4 py-2'><a href="">Settings</a></li>
                <li className='hover:bg-amber-200 px-4 py-2 border-t border-amber-200'><a href="">Log Out</a></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;