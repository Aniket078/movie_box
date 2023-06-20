import React from 'react'
import loader from "./../../assets/loader.png"

const SearchLoading = () => {
  return (
    <div className='  h-screen w-screen fixed   flex justify-center items-center'>
      <div className='backdrop-blur-sm p-9 bg-white/30 rounded-2xl '>
        <img className=' animate-spin h-10 w-10' src={loader} />
      </div>
    </div>
  )
}

export default SearchLoading