import  { useState } from 'react'
import SwitchTab from '../switchTab/switchTab'
import useFetch from "../../hooks/useFetch"
import Carousel from '../carousel/carousel.jsx'
import { motion } from 'framer-motion'
const Popular = () => {

    const [category, setCategory] = useState("movie")

    const onCategoryChange = (category) => {
      setCategory(category)
    }

    const {data, loading} = useFetch(`/${category}/popular`)
  return (
    <>
        <div  className='flex  md:mx-20  my-10 justify-between'>
          <motion.h1 
            initial={{ y:100 }}
            whileInView={{y:0 }}
            transition={{ duration: 1, }}  
            className='text-white text-4xl md:text-6xl '> What's Popular</motion.h1>
          <div className='flex gap-3 items-center'>
            <SwitchTab sTab={category} onTabChange={onCategoryChange} data={["tv", "movie"]} />
          </div>
        </div>
        <motion.div 
          className='md:mx-20  '
          initial={{ y: 300 }}
          whileInView={{y:0 }}
          transition={{ duration: 0.2 }}  
        >
            <Carousel loading={loading} data={data?.results} />
        </motion.div>
        
    </>
  )
}

export default Popular