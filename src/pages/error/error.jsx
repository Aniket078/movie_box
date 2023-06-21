import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-red-500 text-6xl animate-pulse'>Error<h1 className='text-xl cursor-pointer'><Link to={"/"} >click to retry </Link></h1></div>
  )
}

export default Error