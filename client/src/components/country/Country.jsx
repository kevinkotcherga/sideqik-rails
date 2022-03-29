import React, { useState } from 'react';
import './country.scss';
import styled from "styled-components";
import Customers from '../customers/Customers';
import Chart from '../chart/Chart';
import Revenue from '../revenue/Revenue';
import AverageRevenue from '../average-revenue/AverageRevenue';

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option`

`

const Country = () => {
  // J'utilise useState pour récuperer le pays que je vais choisir dans mon selecteur
  const [country, setCountry] = useState({});
  // Je récupère la valeur du Select avec handleFilters(). Je lui dit que la valeur corespondra à la valeur selectionné
  const handleFilters = (element) => {
    const value = element.target.value;
    // Ici je dis à quoi corespondra la valeur dans setFilters, par exemple country: france
    // Le nom du target est country et la valeur sera la valeur selectionné par l'utilisateur
    setCountry(value);
  };

  console.log(country)

  return (
    <div className='country'>
      <div className="country__container">
        <span className='country__label'>Country :</span>
        <Select name="country" onChange={handleFilters}>
              <Option defaultValue >
                All
              </Option>
              <Option>France</Option>
              <Option>United Kingdown</Option>
              <Option>Netherlands</Option>
              <Option>Australia</Option>
              <Option>Germany</Option>
              <Option>EIRE</Option>
              <Option>Norway</Option>
            </Select>
      </div>
      <div className='country__summary'>
              <Revenue country={country} />
              <AverageRevenue country={country} />
              <Customers country={country} />
            </div>
            <div className="home__chart">
              <Chart country={country} />
            </div>
    </div>
  )
}

export default Country
