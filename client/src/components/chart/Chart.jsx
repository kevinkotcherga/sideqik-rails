import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ country }) => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Je récupère la méthode de recherche et je lui appelle 'filters'. Des que filters changera, la recherche changera de pays.
        const response = await axios.get(country === 'All' ? 'http://localhost:3000/search.json' : `http://localhost:3000/search.json?q=${country}`);
        // Je récupère la données triés avec setProducts.
        setFilteredProducts(response.data)
      } catch (err) {}
    };
    getProducts()
  }, [country]);

  // Je stocke mes données triés dans 'array'.
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
          // Je sépare ma date "yyy-mm-dd" pour en faire des éléments séparés "yyyy", "mm", "dd".
					const [y, m, d] = current.date.split('-');
          // J'indique à month d'aller chercher dans mon tableau de mois -1.
					const month = months[m - 1];
          // Mon accumulator récupère les mois et multiplie le prix à l'unité et la quantitée présente dans ces mois.
					return accumulator.set(
						month,
						(accumulator.get(month) ?? 0) + current.unit_price * current.quantity,
					);
          // Je r'envoie un nouveau tableau avec les nouvelles valeurs.
				}, new Map())
				.entries(),
		];
	}
  // J'applique la fonction getRevPerMonth à mon tableau.
  const revenuePerMonth = getRevPerMonth(arr);

  // Je retire les chiffres après la virgule dans mon tableau
   const removeCommaFromArray = revenuePerMonth.map(item => {
    const months = item[0];
    const removeCommaFromNumber = item[1].toFixed(0);
  // Cette fonction m'aurait permit de séparrer les montants par des virgules pour
  // plus de visibilité mais le graphique ne comprend avec cette option :

  //   function numberWithCommas(number) {
  //   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   }
    // const removeComaWithcoma = numberWithCommas(removeCommaFromNumber)
    return [months, removeCommaFromNumber]
  })

  return (
		<div>
			<ResponsiveContainer height="100%" aspect={3}>
				<BarChart
					width={500}
					height={300}
					data={removeCommaFromArray}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid fill="#F8FAFB"/>
					<XAxis dataKey="0" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="1" name='Month' fill="#266399" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart
