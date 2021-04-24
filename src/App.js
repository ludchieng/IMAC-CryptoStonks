import React, { useEffect, useState } from 'react';
import './App.css';
import fetchExchangeRates from'./StonkFetcher/stonkfetcher';

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
      <p>Allo?</p>
      <p>{ (data !== undefined) ? data.message.stonkimac : "" }</p>
    </div>
  );
}

export default App;
