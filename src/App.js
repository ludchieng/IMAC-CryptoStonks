import React, { useEffect, useState } from 'react';
import './App.css';
import StonkChart from './StonkChart/stonkchart'
import fetchExchangeRates from'./StonkFetcher/stonkfetcher';

const style = {
  maxWidth: "300px"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    if (data === undefined) {
      fetchExchangeRates()
        .then((resp) => resp.json())
        .then((data) => { setData(data) })
    }
  });

  return (
    <div>
      <p>{ (data !== undefined) ? data.message.stonkimac : "" }</p>
      <div style={style}>
        <StonkChart />
      </div>
    </div>
  );
}

export default App;
