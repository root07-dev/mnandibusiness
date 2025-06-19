import React from 'react'
import Logo from '../images/aac.png';
import BgHeader from '../images/aab.png';
import { Link, redirect } from "react-router-dom";


function Header() {


  return (
<nav className="h-[500px] bg-cover bg-center w-max-full mx-8 my-6 rounded-lg"  style={{backgroundImage: `url(${BgHeader})`}}>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-40 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
        <div class="flex shrink-0 items-start justify-between px-10">
          <img class="h-24 w-auto" src={Logo} alt=""/>
          
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-8 lg:px-44">
          <a href="#" class="rounded-md md:px-3 py-2 text-[30px] font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Accueil</a>
            <a href="#" class="rounded-md md:px-3 py-2 text-[30px] font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
            <a href="#" class="rounded-md md:px-3 py-2 text-[30px] font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/boutique">Nos Boutiques</Link></a>
            <a href="#" class="rounded-md md:px-3 py-2 text-[30px] font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Appropos</a>
          </div>
        </div>
      </div>
     
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-[30px] text-base font-medium font-autography text-white" >Home</a>
      <a href="#" class="block rounded-md px-3 py-2 text-[30px] text-base font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
      <a href="#" class="block rounded-md px-3 py-2 text-[30px] text-base font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Nos Boutiques</a>
      <a href="#" class="block rounded-md px-3 py-2 text-[30px] text-base font-medium font-autography text-gray-300 hover:bg-gray-700 hover:text-white">Appropos</a>
    </div>
  </div>

  <div className="text-left flex justify-center items-center text-[30px] text-white sm:block sm:text-[50px] font-century px-16">
        Nous choisir<br/>
        c'est nous apdoter
  </div>

</nav>

  )
}

export default Header