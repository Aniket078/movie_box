import  { useState } from 'react'
import SwitchTab from '../switchTab/switchTab'
import useFetch from "../../hooks/useFetch"
import Carousel from '../carousel/carousel.jsx'
import { motion } from 'framer-motion'
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
          <motion.h1
            initial={{ opacity:0 }}
            whileInView={{opacity:1 }}
            transition={{ duration: 0.2, }}  
            className='text-white text-4xl md:text-6xl '> Trending</motion.h1>
          <div className='flex gap-3 items-center'>
            <SwitchTab sTab={time} onTabChange={onTabChange} data={["day", "week"]} />
            <SwitchTab sTab={category} onTabChange={onCategoryChange} data={["tv", "movie"]} />
          </div>
        </div>
        <motion.div 
          initial={{ y: 100 }}
          whileInView={{y:0 }}
          transition={{ duration: 0.2 }}
          className='md:mx-20 overflow-hidden '>
            <Carousel loading={loading} data={data?.results} />
        </motion.div>
        
    </>
  )
}

export default Trending