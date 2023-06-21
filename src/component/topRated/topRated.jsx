import  { useState } from 'react'
import SwitchTab from '../switchTab/switchTab'
import useFetch from "../../hooks/useFetch"
import Carousel from '../carousel/carousel.jsx'
import { motion } from 'framer-motion'
motion
const TopRated = () => {

    const [category, setCategory] = useState("movie")

    const onCategoryChange = (category) => {
      setCategory(category)
    }

    const {data, loading} = useFetch(`/${category}/top_rated`)
  return (
    <>
        <div className='flex  md:mx-20  my-10 justify-between'>
          <motion.h1 
            initial={{ y:80 }}
            whileInView={{y:0 }}
            transition={{ duration: 1, }}  
            className='text-white text-4xl md:text-6xl '>  Top Rated</motion.h1>
          <div className='flex gap-3 items-center'>
            <SwitchTab sTab={category} onTabChange={onCategoryChange} data={["tv", "movie"]} />
          </div>
        </div>
        <motion.div 
          initial={{ y: 300 }}
          whileInView={{y:0 }}
          transition={{ duration: 0.2 }}  
          className='md:mx-20 '>
            <Carousel loading={loading} data={data?.results} />
        </motion.div>
        
    </>
  )
}

export default TopRated