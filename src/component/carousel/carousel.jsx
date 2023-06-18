import React from 'react'
import { useSelector } from 'react-redux'
import CarouselLoading from '../../pages/loading/carouselLoading'
import CarouselError from '../error/carouselError'

const Carousel = ( {data, loading} ) => {
  const baseUrl = useSelector(state => state.home.url.poster)
  const fallBackUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGoDxtD59xH7IpAoS6QmVqNTV-GArgiAL2qpWhc1pIIC0U2bBv1Jpwpv2uwa55ztsvJo&usqp=CAU"

  return (
    <>
      {!loading ? data ? <div className='flex  gap-5 overflow-x-scroll w-full'>
        {data?.map( (card) => {
          const url = card.poster_path ? baseUrl + card.poster_path : fallBackUrl
          return (
            <div  key={card.id} className=' min-w-max'>
              <img className='h-40 md:h-56 ' src={url} />
              <h1 className='text-gray-200 text-xs md:text-sm w-28 md:w-36 text-center'>{card.name? card.name.slice(0, 12) : card.title.slice(0, 15)}....</h1>
              <h1 className='text-gray-500 text-xs md:text-sm w-28 md:w-36 text-center'>{card.release_date||card.first_air_date}</h1>
            </div>
          )
        })}
      </div> : <CarouselError/> : <CarouselLoading />}
      
    </>
  )
}

export default Carousel