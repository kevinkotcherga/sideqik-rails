import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = ({country, filters}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/memory/download_csv');
        console.log(response)
      } catch (err) {}
    };
    getProducts()
  }, [country]);

  return (
    <div>Products</div>
  )
}

export default Products
