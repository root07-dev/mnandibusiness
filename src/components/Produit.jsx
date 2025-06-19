import React from 'react'
import {motion} from 'framer-motion'

function Produit(props) {
  return (
<motion.div 
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
class="flex flex-col items-center gap-6 py-7 rounded-2xl w-full  md:flex md:h-80 md:w-1/4 mb-20 bg-gray-400 h-full">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src={props.data.image} />
  </div>
  <div class="flex items-center flex-col">
    <span class="text-2xl font-medium">{props.data.name} </span>
    <span class="font-medium text-sky-500">{props.data.description} </span>
    <span class="flex gap-2 font-bold text-gray-600 dark:text-gray-400">
      <span>{props.name}</span>
      <span>Prix ·</span>
      <span>{props.data.price} CFAF</span> 
    </span>
    <motion.button 
    whileHover={{ background: '#817F422' }}
    className='font-bold bg-marron px-8 py-4 text-xl text-white'>AJOUTER</motion.button>
  </div>
</motion.div>
  )
}

export default Produit