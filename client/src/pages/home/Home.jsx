import React, { useEffect, useState } from 'react'
import './home.scss'
import Header from '../../components/header/Header'
import Summary from '../../components/summary/Summary';
import Country from '../../components/country/Country';
import Chart from '../../components/chart/Chart';

function Sharks() {

  return (
    <div className='home'>
      <Header />
        <div className="home__country">
          <Country />
        </div>
        <div className='home__summary'>
          <Summary type='revenue' />
          <Summary type='order' />
          <Summary type='customers' />
        </div>
        <div className="home__chart">
          <Chart />
        </div>
    </div>
  )
}

export default Sharks
