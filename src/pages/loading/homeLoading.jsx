import React from 'react'
import loader from "./../../assets/loader.png"

const HomeLoading = () => {
  return (
    <div className='h-screen  w-full flex-col gap-5 flex items-center justify-center'>
        <h1 className=' animate-pulse text-4xl text-white '>Loading.....    </h1>
        <img className=' animate-spin h-10 w-10' src={loader} />
    </div>
  )
}

export default HomeLoading