import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './summary.scss'

const Summary = ( { country } ) => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Ici je récupère la méthode de recherche et je lui appelle 'filters'. Des que filters changera, la recherche changera de pays.
        const response = await axios.get(`http://localhost:3000/search.json?q=${country}`);
        // Je récupère la donnée trié avec setProducts
        setFilteredProducts(response.data)
      } catch (err) {}
    };
    getProducts()
  }, [country]);

  const array = filteredProducts.memories
  const arr = array || [];
  const result1 = arr?.length;

  console.log(filteredProducts.memories);

  return (
    <div className='summary'>
      <div className="summary__top">
        <span className='summary__title'>Utilisateurs</span>
      </div>
      <div className="summary__bottom">
        <span className='summary__counter'>{result1}</span>
      </div>
    </div>
  )
}

export default Summary
