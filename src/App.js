import React, { useEffect, useState } from 'react';
import throttledQueue from 'throttled-queue';
import './App.css';
import fetchExchangeRates from'./StonkFetcher/stonkfetcher';

function App() {
  const [data, setData] = useState([]);
  const throttle = throttledQueue(1, 1000) // at most 1 request every second
  
  useEffect(() => {
    if (data.length === 0) {
      throttle(() => {
        fetchExchangeRates('BTC', 47, 'hours')
          .then((resp) => resp.json())
          .then((data) => {
            setData(data.map((e) => ({
              timestamp: e.timestamp,
              rate: parseFloat(e.rate)
            })))
          })
      })
    }
  });

  return (
    <div>
      <p>Allo?</p>
      <p>{ (data.length) ? data[0].rate : "" }</p>
    </div>
  );
}

export default App;
