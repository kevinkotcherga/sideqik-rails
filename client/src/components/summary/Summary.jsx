import React from 'react'
import './summary.scss'

const Summary = ( {type} ) => {
  let data;

  switch (type) {
    case 'revenue':
      data = {
        title:'Revenue',
        counter: 50
      };
      break;
      case 'order':
      data = {
        title:'Average revenue per order',
        counter: 50
      };
      break;
      case 'customers':
      data = {
        title:'Number of unique customers',
        counter: 50
      };
      break;
      default:
      break;
  }
  return (
    <div className='summary'>
      <div className="summary__top">
        <span className='summary__title'>{data.title}</span>
      </div>
      <div className="summary__bottom">
        <span className='summary__counter'>{data.counter}€</span>
      </div>
    </div>
  )
}

export default Summary
