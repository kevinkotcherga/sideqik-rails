import React from 'react'

const Shark = ({ shark }) => {
  return (
    <div>
      <h1>{shark.name}</h1>
      <h2>{shark.iucn}</h2>
    </div>
  )
}

export default Shark
