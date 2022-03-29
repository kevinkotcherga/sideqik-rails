import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './customers.scss'

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

  function countUnique(iterable) {
  return new Set(iterable).size;
}

  const arrayDos = filteredProducts.memories
  const customers = arrayDos.map((customer) => customer.customer_id)
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
