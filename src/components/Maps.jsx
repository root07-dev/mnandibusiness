import React, { useState } from "react";
import { Map, Marker} from "@vis.gl/react-google-maps";
import {motion} from 'framer-motion'

const Maps = () => {
    // shows marker on London by default
    const [markerLocation, setMarkerLocation] = useState({
      lat: 14.797251500997351,
      lng: -16.963393541880745,
    });
  
    return (
    <motion.div 
    initial={{opacity:0, translateY:'100%'}}
    whileInView={{opacity:1, translateY:'0%'}}
    transition={{duration:2}}
    className="mt-20 md:mt-0 flex items-center justify-center">
        <div className="w-3/4 align-middle h-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg">
        <div>
            <div className="flex flex-col justify-center items-center text-center md:text-left text-[40px] text-black sm:block sm:text-[50px] font-century">
                Nos Boutiques
            </div>
        </div>
        <div className="h-[200px] md:h-[500px] w-3/4 border-2 rounded-sm">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          defaultCenter={markerLocation}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <Marker position={markerLocation} />
        </Map>
      </div>
    </div>
    </motion.div>
    
      
    );
  }
  
  export default Maps;
  
