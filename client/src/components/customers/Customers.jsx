import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './customers.scss'

const Summary = ( { country } ) => {

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

  // Set ne compte qu'une copie par valeur et me premet de connaitre le nombre de clients unique.
  function countUnique(iterable) {
  return new Set(iterable).size;
  }
  // Je stocke mes données dans 'array'.
  const array = filteredProducts.memories
  // Si array ne contient rien alors il est vide et ne fait pas crasher l'appplication.
  const arr = array || [];
  // Mapping des données pour obtenir les 'customer_id'.
  const customers = arr.map((customer) => customer.customer_id)
  // On compte ensuite le nombre d'utilisateurs unique avec la fonction countUnique.
  const NumberOfCustomers = countUnique(customers)

  return (
    <div className='customers'>
      <div className="customers__top">
        <span className='customers__title'>Customers</span>
      </div>
      <div className="customers__bottom">
        <span className='customers__counter'>{NumberOfCustomers}</span>
      </div>
    </div>
  )
}

export default Summary
