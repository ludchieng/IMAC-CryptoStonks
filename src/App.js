import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Stonk/Header";
import Aside from "./Stonk/Aside";
import Footer from "./Stonk/Footer";
import StonkAlert from "./Stonk/StonkAlert";
import fetchExchangeRates from'./Stonk/StonkFetcher';

let cryptoList=[
  {name : "ImacCoin", price : 10, nb : 100, symbol : "IMA"}, 
  {name : "SaltCoin", price : 100, nb : 2730, symbol : "SLT"},
  {name : "OpainGL", price : 0.1, nb : 1578, symbol : "OGL"},
  {name : "ZesipeGold", price : 1, nb : 358, symbol : "ZPG"},
  {name : "NozickTokenMaths", price : 101, nb : 72, symbol : "NTM"},
];

function App() {
  
  const [crypto, setCrypto] = useState(cryptoList);
  const [data, setData] = useState();

  useEffect(() => {
    if (data === undefined) {
      fetchExchangeRates()
        .then((resp) => resp.json())
        .then((data) => { setData(data)
        console.log(data) })
    }
  });

  return(
    <div>
      <Header
        name = "CRYPTOSTONK"
        follower = "DuduDu93600"
        subscriber = "Xx_D4rk__Sasuk3_xX"
        donator = "anonymous"
        donation = "5.00"
      />

      <Aside
        cryptoList = {crypto}
        cryptoData = {data}
      />
      
      <StonkAlert
        name = "ImacCoin"
        price = "1000"
      />

      <Footer
        cryptoList = {crypto}
        cryptoData = {data}
      />
    </div>
    
  )
}

export default App;
