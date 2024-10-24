import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import User from './user'

function Home() {
  const [Users, setUsers]= useState('Parveen Kumar Pasricha')
  function userChange()
  {
    const name= prompt("Enter your Name");
    if(name)
    {
      setUsers(name);
    }
  }
  return (
    <div>
      <div className='bg-blue-600 font-semibold p-4 flex '>
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
            <h1 className=' text-center text-4xl font-bold text-white'>{Users}</h1>
            <button className='bg-blue-600 ' onClick={userChange}>User Change</button>
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
