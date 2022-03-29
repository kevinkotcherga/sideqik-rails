import React from 'react'
import './averagerevenue.scss'

const AverageRevenue = () => {
  return (
    <div>
      <div className='averagerevenue'>
      <div className="averagerevenue__top">
        <span className='averagerevenue__title'>Average revenue per order</span>
      </div>
      <div className="averagerevenue__bottom">
        <span className='averagerevenue__counter'>Counter</span>
      </div>
    </div>
    </div>
  )
}

export default AverageRevenue
