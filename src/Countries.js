import React from "react";
import data from "./data.json"
import Country from "./Country"

const Countries = (props) => {
  return(
    <Country data = {data} />
  )
}

export default Countries