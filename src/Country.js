import React from "react"

const Country = (props) => {
  return (
    <div className="allCountries">

      {props.data.map((country, index) =>(
        <div key = {index} className="country">

          <div>
            <img src={country.flag} alt = "country flag" className="flag" />
            <h1>{country.name}</h1>
          </div>

          <div>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>

        </div>
        ))}

    </div>)}

export default Country