import React from 'react'
import { Link } from 'react-router-dom'



function Qualification() {
  return (
    <div>
      <div className='bg-red-600 font-semibold p-4 flex'>
        <div className='text-left'>
          <h1>Portfolio</h1>
        </div>
        <div>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/" >Home</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/contact">Contact</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/movement">Movement</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/qualification">Qualification</Link>
        </div>
        </div>
        <div className='flex bg-red-300 w-full px-10'>
          <div className='ml-20'><img src='https://png.pngtree.com/png-vector/20230323/ourmid/pngtree-graduation-cap-graduation-certificate-white-background-transparent-png-image_6663878.png'></img></div>
          <div className='font-bold text-black m-44 ml-2'>BACHELOR IN COMPUTER APPLICATION IN PUNJAB UNIVERSITY</div>
        </div>
    </div>
  )
}

export default Qualification
