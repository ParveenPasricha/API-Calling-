import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { FaBeer } from 'react-icons/fa'
function Contact() {
  return (    
    <>
      <div className='bg-red-600 font-semibold p-4 flex'>
        <div className='text-left'>
          <h1>Portfolio</h1>
        </div>
        <div className=''>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/" >Home</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/contact">Contact</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/movement">Movement</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/qualification">Qualification</Link>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full opacity-20' src='https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-businesswoman-using-contact-icon-interface-photo-image_29649620.jpg'/>
        <p className='whitespace-nowrap text-2xl absolute top-96 bottom-10 w-full text-center text-violet-700 font-bold'> Mobile No 9653402603 </p>
        <p className='whitespace-nowrap text-2xl absolute top-80 bottom-14 w-full text-center text-green-600 font-bold' >Email pasricha.parveen@yahoo.in</p>
        </div>
    </>
  )
}

export default Contact
