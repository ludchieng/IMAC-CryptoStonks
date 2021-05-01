import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Stonk/Header";
import Aside from "./Stonk/Aside";
import Footer from "./Stonk/Footer";
import StonkAlert from "./Stonk/StonkAlert";
import fetchExchangeRates from'./Stonk/StonkFetcher';

const cryptoList=[
  {name : "ImacCoin", nb : .21, symbol : "IMA"}, 
  {name : "SaltCoin", nb : .27, symbol : "SLT"},
  {name : "OpainGL", nb : .15, symbol : "OGL"},
  {name : "ZesipeGold", nb : .32, symbol : "ZPG"},
  {name : "NozickTokenMaths", nb : .72, symbol : "NTM"},
];

function App() {
  
  const [cryptoData, setCryptoData] = useState();
  const [intervalFetchExchangeRates, setIntervalFetchExchangeRates] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIntervalFetchExchangeRates(
      setInterval(() =>
        fetchExchangeRates()
          .then((resp) => resp.json())
          .then((data) => {
            setCryptoData(data.message);
            setIsLoaded(true);
            console.log(data);
          })
      , 1000)
    );
  }, []);

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
        isLoaded = {isLoaded}
        cryptoList = {cryptoList}
        cryptoData = {cryptoData}
      />
      
      <StonkAlert
        isLoaded = {isLoaded}
        name = "ImacCoin"
        price = "1000"
      />

      <Footer
        isLoaded = {isLoaded}
        cryptoList = {cryptoList}
        cryptoData = {cryptoData}
      />
    </div>
    
  )
}

export default App;
