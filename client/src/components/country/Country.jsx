import React from 'react'
import './country.scss'
import styled from "styled-components"

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option`

`

const Country = () => {
  return (
    <div className='country'>
      <div className="country__container">
        <span className='country__label'>Country :</span>
        <Select name="country">
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
      </div>
    </div>
  )
}

export default Country
