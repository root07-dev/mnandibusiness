import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Produit from '../components/Produit';
import {motion} from 'framer-motion'
import Category from '../components/Category';


function Boutique() {

  const [todoList, setTodoList]  = useState([])
  const [categoryList, setCategoryList]  = useState([])
  const [categoryListproduit, setCategoryListproduit]  = useState([])

  useEffect(()=>{
    refreshList()
    categoriesList()
   
    
  },[])

  
  const refreshList = () => {
    axios
      .get("/produits/")
      .then((res) => {
        setTodoList(res.data)
      })
      .catch((err) => console.log(err));
  };

  const categoriesList = () => {
    axios
      .get("/categories/")
      .then((res) => {
        setCategoryList(res.data)
      })
      .catch((err) => console.log(err));
  };

  const categoriesListproduits = () => {
    axios
      .get("produits/1/category/")
      .then((res) => {
        setCategoryListproduit(res.data)
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      
      <div className='w-full flex px-48 py-5 justify-start content-center  bg-marron h-24'>
      {categoryList.map((data) => <Category  data={data}/> )} 
      
      </div>
    <motion.div 
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2}}
    class="block md:flex flex-wrap my-10">
        {categoryListproduit.map((data) => <Produit data={data}/> )} 
      </motion.div >
      
    </div>
    
    
  );
}

export default Boutique