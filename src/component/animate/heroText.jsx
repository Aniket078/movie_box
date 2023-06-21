import { motion } from 'framer-motion';
import React from 'react'

const HeroText = ({text, key}) => {

    const words = text.split("");
    console.log(words);

    // const container = {
    //     hidden: { opacity: 0 },
    //     visible: (i = 1) => ({
    //       opacity: 1,
    //       transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    //     }),
    //   };

      const child = {
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };

  return (
    <motion.div
        
        key={key}
        initial={{y: 100}}
        animate={{y: 0}}
        transition={{ duration:3, type: "spring",damping: 12,stiffness: 100}}
    >
        {text}
        {/* {words.map((word, index) => {
            return (<motion.span variants={child} key={index} style={{marginRight: "5px"}}>
                        {word}
                    </motion.span>
        )})} */}
    </motion.div>
  )
}

export default HeroText