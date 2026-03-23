import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div className='absolute z-10 px-6 bg-gradient-to-b from-black w-[100%] flex items-center justify-between'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png?_=20190206123158" alt='netflix-logo' />
      <div className='flex items-center'>
         <IoIosArrowDropdown color='white' size="24px"/>
        <h1 className='text-lg font-mono text-white'>Nishant mernstack</h1>
        <div className='ml-4'>
          <button className='bg-red-800 text-white py-2 px-4'>logout</button>
          <button className='bg-red-800 text-white py-2 px-4 ml-2'>Search Movi</button>
        </div>
      </div>
    </div>
  )
}

export default Header
