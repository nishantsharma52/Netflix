import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

function Header() {
  const user = useSelector((store)=>store.app.user)
  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success){
        toast.success(res.data.message)
      }
      dispatch(setUser(null))
      nevigate("/")
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

  const toggleHandler = () =>{
    dispatch(setToggle())
  }

  return (
    <div className='absolute z-10 px-6 bg-gradient-to-b from-black w-[100%] flex items-center justify-between'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png?_=20190206123158" alt='netflix-logo' />
      {
        user && (
          <div className='flex items-center'>
         <IoIosArrowDropdown color='white' size="24px"/>
        <h1 className='text-lg font-mono text-white'>{user?.fullname}</h1>
        <div className='ml-4'>
          <button onClick={logoutHandler} className='bg-red-800 text-white py-2 px-4'>logout</button>
          <button onClick={toggleHandler} className='bg-red-800 text-white py-2 px-4 ml-2'>Search Movi</button>
        </div>
      </div>
        )
      }
      
    </div>
  )
}

export default Header
