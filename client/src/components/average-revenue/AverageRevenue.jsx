import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './averagerevenue.scss'

const AverageRevenue = ({ country }) => {

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
  const orders = arr.map((order) => order.order_id)
  // On compte ensuite le nombre de commandes avec la fonction countUnique.
  const NumberOfOrders = countUnique(orders)
  // Je calcul le revenu total
  const total = arr.reduce((total, {quantity, unit_price}) => {
    total += quantity * unit_price
    return total
  }, 0
)
  // Je divise le revenu total par le nombre de commandes :
  const AverageOrderValue = total / NumberOfOrders

  return (
    <div>
      <div className='averagerevenue'>
      <div className="averagerevenue__top">
        <span className='averagerevenue__title'>Average revenue per order</span>
      </div>
      <div className="averagerevenue__bottom">
        <span className='averagerevenue__counter'>{AverageOrderValue.toFixed(2)} €</span>
      </div>
    </div>
    </div>
  )
}

export default AverageRevenue
