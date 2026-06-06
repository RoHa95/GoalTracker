import { Container } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import SideBarContent from './SideBarContent'
import { Link } from 'react-router-dom'

function Sidebar({setOpenMenu,openMenu}) {
  return (
   <div className='w-full h-full bg-blue-800'>
   <div onClick={()=>setOpenMenu(!openMenu)} className='text-white mb-4 text-xl py-3 pl-3 cursor-pointer w-fit'><IoClose/></div>
   <SideBarContent/>
   </div>
    
  )
}

export default Sidebar