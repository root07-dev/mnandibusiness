import React from 'react'
import Header from "./Header";
import Service from "./Service";
import Maps from "./Maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import Appropos from "./Appropos";
import Footer from "./Footer";

function Home() {
  return (
    <div className="max-w-full">
        <Header/>
        <Service/>
        {/* <Shoping/> */}
        <APIProvider apiKey={"AIzaSyDe6HPIjwtQUCfQHe9_2bfF23j-XU9xvGc"}>
          <Maps/>
        </APIProvider>
        <Appropos/>
        <Footer/>
    </div>
  )
}

export default Home