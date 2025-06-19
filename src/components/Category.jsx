import React from 'react'
import {motion} from 'framer-motion'

function Category(props) {



  return (
    <div> <motion.button onClick={props.action(props.data.pk)}
    whileHover={{ background: '#817F422' }}
    className='font-bold bg-marron border border-solid px-10 mx-10 py-2 text-sm text-white md:flex bg-gray-400 '>{props.data.name}</motion.button></div>
  )
}

export default Category