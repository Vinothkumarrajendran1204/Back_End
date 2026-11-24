import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 bg-gray-800 text-white'>
        <div className='p-4'>logo</div>
        <div className='flex gap-4 p-4'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/products'>products</NavLink>
            <NavLink to='/fetch'>fetch</NavLink>
            
        </div>
    </div>
  )
}

export default Navbar 