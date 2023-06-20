import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const MovieCard = ({data, key}) => {

    const navigate = useNavigate()
    const {url} = useSelector(state => state.home)
    const posterUrl = data.poster_path ? url.poster+data.poster_path : ""
  return (
    <>
        <div onClick={() => {navigate(`/${data.first_air_date ? "tv" : "movie"}/${data.id}`)}}  key={key} className='cursor-pointer  rounded-lg relative mb-4 flex flex-col'>
            <img className='h-32 md:h-56  rounded-lg' src={posterUrl} />
            <h1 className='text-gray-200 mt-1  text-xs md:text-sm w-28 md:w-36 text-center'>{data.name? data.name.slice(0, 12) : data.title.slice(0, 15)}....</h1>
            <h1 className='text-gray-500 text-xs md:text-sm w-28 md:w-36 text-center'>{data.first_air_date ? dayjs(data.first_air_date).format("MMM D, YYYY"): dayjs(data.release_date).format("MMM D, YYYY")}</h1>
            <div className='border-[2px] rounded-full flex items-center justify-center absolute bottom-14 right-0 h-10 w-10 md:h-14 md:w-14 text-xs backdrop-blur-sm bg-white/30'> <h1 className='text-white'>{data.vote_average.toFixed(1)}/10</h1></div>
        </div>
    </>
  )
}

export default MovieCard