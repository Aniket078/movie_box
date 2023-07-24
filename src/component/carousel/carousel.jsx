import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import CarouselLoading from '../../pages/loading/carouselLoading'
import CarouselError from '../error/carouselError'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const Carousel = ( {data, loading} ) => {
  const baseUrl = useSelector(state => state.home.url.profile)
  const fallBackUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGoDxtD59xH7IpAoS6QmVqNTV-GArgiAL2qpWhc1pIIC0U2bBv1Jpwpv2uwa55ztsvJo&usqp=CAU"
  const carousel = useRef()
  const navigate = useNavigate()
  const navigation = (dir) => {
    const container = carousel.current
    const scrollAmount = dir ==="left" ? container.scrollLeft - (<container className="offsetWidth"></container> + 20) : container.scrollLeft + (container.offsetWidth + 20)
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    })
  }
  
  

  return (
    <>
      {!loading ? data ? <>
        <div ref={carousel} className='flex  gap-8 overflow-x-scroll w-full'>
        {data?.map( (card) => {
          const url = card.poster_path ? baseUrl + card.poster_path : fallBackUrl
          return (
            <div onClick={() => {navigate(`/${card.first_air_date ? "tv" : "movie"}/${card.id}`)}}  key={card.id} className='cursor-pointer min-w-max rounded-lg relative mb-4 '>
              <img className='h-40 md:h-56 rounded-lg hover:scale-105 transition-transform' src={url} />
              <h1 className='text-gray-200 mt-1  text-xs md:text-sm w-28 md:w-36 text-center '>{card.name? card.name.slice(0, 12) : card.title.slice(0, 15)}....</h1>
              <h1 className='text-gray-500 text-xs md:text-sm w-28 md:w-36 text-center'>{card.first_air_date ? dayjs(card.first_air_date).format("MMM D, YYYY"): dayjs(card.release_date).format("MMM D, YYYY")}</h1>
              <div className='border-[2px] rounded-full flex items-center justify-center absolute bottom-14 right-0 h-14 w-14 backdrop-blur-sm bg-white/30'> <h1 className='text-white'>{card.vote_average.toFixed(1)}/10</h1></div>
            </div>
          )
        })}
          
      </div>
      <div className="h-full flex gap-3 items-end justify-start mt-6">
      <div onClick={() => {navigation("left")}} className="cursor-pointer transition duration-500  h-8 w-14 border-[1px] hover:border-red-500 border-gray-400 rounded-lg text-center"><p className="text-xl hover:text-red-500 text-gray-400">&larr;</p></div>
      <div onClick={() => {navigation("right")}} className="transition duration-500 cursor-pointer h-8 w-14 border-[1px] border-white hover:border-red-500 rounded-lg text-center"><p className="text-xl text-white hover:text-red-500">&rarr;</p></div>
  </div>
      </>
      : <CarouselError/> : <CarouselLoading />}
      
    </>
  )
}

export default Carousel