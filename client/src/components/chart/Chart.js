import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({ country }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Je récupère la méthode de recherche et je lui appelle 'filters'. Des que filters changera, la recherche changera de pays.
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
  const arr = array || [];

  function getRevPerMonth(arr) {
    // Je créer une constante et définit les mois de l'année.
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		return [
      // Je récupère mon tableau
			...arr
      // Je lui applique un reduce, il va parcourir le tableau et pour chaque élément appeler la fonction
      // avec les paramètres accumulator et current
				.reduce((accumulator, current) => {
					const [y, m, d] = current.date.split('-');
					const month = months[m - 1];
					return accumulator.set(
						month,
						(accumulator.get(month) ?? 0) + current.unit_price * current.quantity,
					);
				}, new Map())
				.entries(),
		];
	}

  const revenuePerMonth = getRevPerMonth(arr);

  // console.log(mapping)

  return (
		<div>
			<ResponsiveContainer aspect={3}>
				<BarChart
					width={500}
					height={300}
					data={revenuePerMonth}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="0" name="Revenue" fill="#8884d8" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="1" name="Month" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart
