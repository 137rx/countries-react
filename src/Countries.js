import React, { useState, useEffect } from "react";
const Countries = (props) => {
const [searchCountry, setSearchCountry] = useState("")
const [result, setResult] = useState([])

const handleChange = (event) => {
  let lowCaseValue = event.target.value.toLowerCase()
    return setSearchCountry(lowCaseValue)
}

useEffect (() => {
let filterCountries = props.data.filter((country) => (
  (country.name.toLowerCase() &&  country.capital.toLowerCase()).includes(searchCountry)
))
setResult(filterCountries)
}, [searchCountry])
  return (
    <div className="container">
      <div className="search">
      <input placeholder="Search..." type="text" onChange = {handleChange} />
      </div>
      <div className="allCountries">
        {result.map((country, index) => (
          <div key={index} className="country">
            <div>
              <img src={country.flag} alt="country flag" className="flag" />
              <h1>{country.name}</h1>
            </div>

            <div>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Countries;
