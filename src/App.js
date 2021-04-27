import React, { useEffect, useState } from 'react';
import './App.css';
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import fetchExchangeRates from'./StonkFetcher/stonkfetcher';

let cryptoList=[
  {name : "ImacCoin", price : 10, symbol : "IMA"}, 
  {name : "SaltCoin", price : 100, symbol : "SLT"},
  {name : "OpainGL", price : 0.1, symbol : "OGL"}
]

function App() {
  
  const [crypto, setCrypto] = useState(cryptoList);
  const [data, setData] = useState();

  useEffect(() => {
    if (data === undefined) {
      fetchExchangeRates()
        .then((resp) => resp.json())
        .then((data) => { setData(data) })
    }
  });

  return(
    <LeftSideBar
      cryptoList = {crypto}
      cryptoData = {data}
    />
  )
}

export default App;
