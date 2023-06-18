import React, { useState } from 'react'
import SwitchTab from '../switchTab/switchTab'
import useFetch from "../../hooks/useFetch"
import Carousel from '../carousel/carousel.jsx'

const Trending = () => {

    const [time, setTime] = useState("day")
    const [category, setCategory] = useState("movie")
    const onTabChange = (time) => {
        setTime(time)
    }
    const onCategoryChange = (category) => {
      setCategory(category)
    }

    const {data, loading} = useFetch(`/trending/${category}/${time}`)
    console.log(data);
  return (
    <>
        <div className='flex  md:mx-20  my-10 justify-between'>
          <h1 className='text-white text-4xl md:text-6xl '> Trending</h1>
          <div className='flex gap-3 items-center'>
            <SwitchTab sTab={time} onTabChange={onTabChange} data={["day", "week"]} />
            <SwitchTab sTab={category} onTabChange={onCategoryChange} data={["tv", "movie"]} />
          </div>
        </div>
        <div className='md:mx-20  '>
            <Carousel loading={loading} data={data?.results} />
        </div>
    </>
  )
}

export default Trending