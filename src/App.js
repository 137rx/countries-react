import React from 'react';
import './App.css';
import data from "./data.json"
import Countries from './Countries'

function App() {
  return (
    <div className="App">
      <Countries data={data} />
    </div>
  );
}

export default App;
