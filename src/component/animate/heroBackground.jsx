import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const HeroBackground = ({url, key}) => {
  return (

    <AnimatePresence >
        <motion.div 
            style={{backgroundImage: 'url(' + url + ')' }} 
            className= {`absolute h-full w-full brightness-75  overflow-hidden bg-cover bg-center -z-20  `} 
            key={key}
            initial={{scale: 1,  opacity: 0.8}}
            animate={{scale: 1.5,  opacity: 1 }}
            transition={{duration:20}}
            exit={{ opacity: 0 }}
            >
            
        </motion.div>
    </AnimatePresence>
  )
}

export default HeroBackground