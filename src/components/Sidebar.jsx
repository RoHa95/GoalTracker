import { Container } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import { BiCross } from 'react-icons/bi'
import SideBarContent from './SideBarContent'
function Sidebar({setOpenMenu,openMenu}) {
  return (
   <div>
   <div onClick={()=>setOpenMenu(!openMenu)} className='text-white text-xl pt-3 pl-3 cursor-pointer'><BiCross/></div>
   <SideBarContent/>
   </div>
    
  )
}

export default Sidebar