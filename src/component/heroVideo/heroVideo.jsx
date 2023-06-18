import React from 'react'
import useFetch from '../../hooks/useFetch'
import './styles.css'
const HeroVideo = (props) => {

    const {results, index} = props
    const movie_id = results[index].id
    const {data, loading, error} = useFetch(`/movie/${movie_id}/videos?language=en-US`)

  return (
    <>
      { loading ? <div className='h-full w-full animate-pulse bg-red-500 transition-all duration-500'>
        
      </div> : 
      <div className='video-background'>
        {data &&  <iframe
            width={1920}
            height={1080}
            src={`https://www.youtube.com/embed/${data.results[data.results.length-1].key}?autoplay=1&mute=1&controls=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>}
      </div>}
    </>
  )
}
// src={`https://www.youtube.com/embed/${data.results[0].key}?autoplay=1&mute=1&controls=0`}>
export default HeroVideo