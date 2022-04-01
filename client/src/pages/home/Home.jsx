import React, { useEffect, useState } from 'react'
import './home.scss'
import Header from '../../components/header/Header'
import styled from "styled-components";
import Customers from '../../components/customers/Customers';
import Chart from '../../components/chart/Chart';
import Revenue from '../../components/revenue/Revenue';
import AverageRevenue from '../../components/average-revenue/AverageRevenue';

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
`

const Option = styled.option`

`

function Home() {

  // J'utilise useState pour récuperer le pays que je vais choisir dans mon selecteur
  const [country, setCountry] = useState({});
  // Je récupère la valeur du Select avec handleFilters(). Je lui dit que la valeur corespondra à la valeur selectionné
  const handleFilters = (element) => {
    const value = element.target.value;
    // Ici je dis à quoi corespondra la valeur dans setFilters, par exemple country: france
    // Le nom du target est country et la valeur sera la valeur selectionné par l'utilisateur
    setCountry(value);
  };

  return (
    <div className='home'>
      <Header />
        <div className="home__country">
        <span className='home__label'>Country</span>
        <Select name="country" onChange={handleFilters}>
              <Option defaultValue >
                All
              </Option>
              <Option>France</Option>
              <Option>Norway</Option>
              <Option>Germany</Option>
              <Option>Netherlands</Option>
              <Option>Australia</Option>
              <Option>EIRE</Option>
              <Option>United</Option>
            </Select>
        </div>
        <div className='home_summary'>
          <span className='home__title'>Summary</span>
          <div className='home__widgets'>
          <Revenue country={country} />
          <AverageRevenue country={country} />
          <Customers country={country} />
        </div>
      </div>
      <div className="home__chart">
        <span className='home__title'>Revenue Per Month</span>
        <div className='home__graphique'>
        <Chart country={country} />
        </div>
      </div>
    </div>
  )
}

export default Home
