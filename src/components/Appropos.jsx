import React from 'react'
import BgAppropos from '../images/abg.png';
import {motion} from 'framer-motion'

export default function () {
  return (
    <motion.div 
    initial={{opacity:0, translateY:'100%'}}
    whileInView={{opacity:1, translateY:0}}
    transition={{duration:2}}
    className="h-[200px] md:h-[400px] bg-cover bg-center w-max-full mx-8 my-6 rounded-lg"  style={{backgroundImage: `url(${BgAppropos})`}}>


    </motion.div>
  )
}
