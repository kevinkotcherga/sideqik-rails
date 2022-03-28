import React, { useState } from 'react';
import './country.scss';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Products from '../products/Products';

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option`

`

const Country = () => {
  // useLocation me permet de savoir ou je suis dans l'url.
  let location = useLocation();
  // Ici ça m'indique location = / parce que je suis sur la home page.
  // location.pathname m'indiquera /france si je suis sur /france
  const country = location.pathname.split('/')[2];
  // J'utilise useState pour récuperer le pays que je vais choisir dans mon selecteur
  const [filters, setFilters] = useState({});
  // Je récupère la valeur du Select avec handleFilters(). Je lui dit que la valeur corespondra à la valeur selectionné
  const handleFilters = (element) => {
    const value = element.target.value;
    // Ici je dis à quoi corespondra la valeur dans setFilters, par exemple country: france
    // Le nom du target est country et la valeur sera la valeur selectionné par l'utilisateur
    setFilters({
      [element.target.name] : value,
    });
  };

  return (
    <div className='country'>
      <div className="country__container">
        <span className='country__label'>Country :</span>
        <Select name="country" onChange={handleFilters}>
              <Option disabled >
                Country
              </Option>
              <Option>France</Option>
              <Option>Italie</Option>
              <Option>Germany</Option>
              <Option>United Kingdown</Option>
              <Option>Spane</Option>
              <Option>Ukraine</Option>
            </Select>
            <Products country={country} filters={filters} />
      </div>
    </div>
  )
}

export default Country
