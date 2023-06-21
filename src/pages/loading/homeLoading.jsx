import React from 'react'
import loader from "./../../assets/loader.png"
import { motion, AnimatePresence } from 'framer-motion'

const HomeLoading = () => {
  return (
    <AnimatePresence>
      <motion.div 
      className='h-screen  w-full flex-col gap-5 flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 5}}
      
    >
        <h1 className=' animate-pulse text-4xl text-white '>Loading.....    </h1>
        <img className=' animate-spin h-10 w-10' src={loader} />
    </motion.div>
    </AnimatePresence>
  )
}

export default HomeLoading
