import React from 'react'
import loader from "./../../assets/loader.png"

const SearchLoading = () => {
  return (
    <div className='backdrop-blur-sm  h-screen w-screen fixed   flex justify-center items-center'>
        <img className=' animate-spin h-10 w-10' src={loader} />
    </div>
  )
}

export default SearchLoading