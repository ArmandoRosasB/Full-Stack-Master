import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"

export const YearComponent = ({year}) => {

    const [curr_year, setYear] = useState(year)

    const plusOne  = (e) => {
        setYear(curr_year + 1);
    }

    const minusOne = (e) => {
        setYear(curr_year - 1);
    }

    const changeYear = (e) => {
        let dato = parseInt(e.target.value);

        if (Number.isInteger(dato))
        {
            setYear(dato);
        }
        else
        {
            setYear(year);
        }
        
    }

  return (
    <div>
        <h2>Year</h2>
        <p>  <strong className='label label-green'>{curr_year}</strong></p>
        <div className="buttons">
            <button onClick={e => minusOne(e)}> Past Year</button>
            &nbsp;
            <button onClick={ e => plusOne(e)}> Next Year</button>
        </div>

        <input type="text" onKeyUp={e => changeYear(e)} placeholder="Enter a year"/>
        
    </div>
  )
}


YearComponent.propTypes = {
    year: PropTypes.number.isRequired
}
YearComponent.defaultProps = {
    year: new Date().getFullYear()
}