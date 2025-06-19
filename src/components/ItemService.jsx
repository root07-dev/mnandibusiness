import React from 'react'
import { motion } from "motion/react"

function ItemService(props) {
  return (
    <motion.div class="w-full  md:flex md:h-80 md:w-1/4 mb-4 bg-gray-400 h-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
    >
        
        <div>
              <div class="flex shrink-0 items-center justify-center px-10">
                <img class="h-full scale-75 w-auto" src={props.img} alt=""/>
              </div>
              <div className="flex flex-col justify-center items-center text-center text-[40px] text-black sm:block sm:text-[20px] font-century px-16">
                {props.titre}
              </div>
        </div>     
      </motion.div>
  )
}

export default ItemService