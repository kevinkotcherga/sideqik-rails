import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './revenue.scss'

const Revenue = ({ country }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Ici je récupère la méthode de recherche et je lui appelle 'filters'. Des que filters changera, la recherche changera de pays.
        const response = await axios.get(country === 'All' ? 'http://localhost:3000/search.json' : `http://localhost:3000/search.json?q=${country}`);
        // Je récupère la donnée trié avec setProducts
        setFilteredProducts(response.data)
      } catch (err) {}
    };
    getProducts()
  }, [country]);

  // Je stocke mes données dans 'array'.
  const array = filteredProducts.memories
  // Si array ne contient rien alors il est vide et ne fait pas crasher l'appplication.
  let arr = array || [];
  // Je calcule le total avec la méthode 'reduce'. J'initialise total à 0 et je lui additione chaque prix par sa quantitée.
  const total = arr.reduce((total, {quantity, unit_price}) => {
    total += quantity * unit_price
    return total
  }, 0
)
  // Cette fonction me permet de séparer les nombres par des virgules.
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const totalWithCommas = numberWithCommas(total.toFixed(2))

  return (
    <div>
      <div>
      <div className='revenue'>
      <div className="revenue__top">
        <span className='revenue__title'>Revenue</span>
      </div>
      <div className="revenue__bottom">
        <span className='revenue__counter'>{totalWithCommas} €</span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Revenue
