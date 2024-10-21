import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg-red-600 font-semibold p-4 flex '>
        <div className='text-left' >
          <h1>Portfolio</h1>
        </div>
        <div>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/" >Home</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/contact">Contact</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/movement">Movement</Link>
        <Link className='m-6 hover:bg-black hover:text-white p-4' to="/qualification">Qualification</Link>
        </div>
      </div>
      <div className='bg-black flex w-full'>
          <div className='m-40 w-96'>
            <h1 className=' text-center text-4xl font-bold text-white'>Parveen Kumar Pasricha</h1>
            <br></br>
            <div className='w-70'><hr></hr></div><br></br>
            <p className=' text-center text-yellow-400 text-2xl'>I am Current Training in Full Stack Course in Sansation Company Mohali</p>
          </div>
          <div>
            <img className='w-96'  src='src\Pages\Avatar.jpg'></img>
          </div>
    </div>
  </div>
  )
}

export default Home
