import React from 'react'
import Img1 from '../images/aao.png'
import Img2 from '../images/aap.png'
import Img3 from '../images/aaq.png'
import Img4 from '../images/aar.png'
import Img5 from '../images/aas.png'
import Img6 from '../images/aav.png'
import Img7 from '../images/aat.png'
import Img8 from '../images/aau.png'
import ItemService from './ItemService'
import TitleService from './TitleService'
import {motion} from 'framer-motion'

function Service() {
  return (
  <div>

    <div className="flex flex-col justify-center items-center text-center text-[30px] text-black sm:block sm:text-[50px] font-century px-16">
        Our Services
        <div className='text-[10px]'>
          choosing us is adopting us
        </div>
    </div>

    <TitleService titre='BEAUTY'/>

    <motion.div 
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2}}
    class="block md:flex flex-wrap -mb-4">
      <ItemService titre='Coiffures femmes' img={Img1}/>
      <ItemService titre='Manicures' img={Img2}/>
      <ItemService titre='Soins de Visage' img={Img3}/>
      <ItemService titre='Pedicures' img={Img4}/>
      <ItemService titre='Tresses' img={Img5}/>
      <ItemService titre='Coiffures Hommes' img={Img6}/>
    </motion.div>

    <TitleService titre='SHOPPING'/> 

    <motion.div
    initial={{opacity:0, translateX:'100%'}}
    whileInView={{opacity:1, translateX:'0'}}
    transition={{duration:2}}
    class="block md:flex flex-wrap -mb-4 ">
      <ItemService titre='Parfumerie' img={Img7}/>
      <ItemService titre='Tissus' img={Img8}/>
      
    </motion.div>


  </div>
  )
}

export default Service