import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className=' text-center '>
      <img src='https://blog.fluidui.com/assets/images/posts/get-notes.png' alt='Error Page Image'>
      </img>
      <Link to='/'>Back to Home Page</Link>
    </div>
  )
}

export default Error
  