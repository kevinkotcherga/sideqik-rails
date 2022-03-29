import React, { useEffect, useState } from 'react'
import './home.scss'
import Header from '../../components/header/Header'
import Country from '../../components/country/Country';

function Home() {

  return (
    <div className='home'>
      <Header />
        <div className="home__country">
          <Country />
        </div>
    </div>
  )
}

export default Home
