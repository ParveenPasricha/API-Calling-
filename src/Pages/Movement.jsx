import React from 'react'
import { Link } from 'react-router-dom'

function Movement() {
  return (
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
        <div>
          <img src=''></img>
        </div>
    </div>
    
  )
}

export default Movement
