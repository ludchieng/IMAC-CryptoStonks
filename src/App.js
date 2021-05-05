import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Stonk/Header";
import Aside from "./Stonk/Aside";
import Footer from "./Stonk/Footer";
import StonkAlert from "./Stonk/StonkAlert";
import fetchExchangeRates from'./Stonk/StonkFetcher';

const cryptoList=[
  { name : "ImacCoin", nb : .21, symbol : "IMA" }, 
  { name : "SaltCoin", nb : .27, symbol : "SLT" },
  { name : "OpainGL", nb : .15, symbol : "OGL" },
  { name : "ZesipeGold", nb : .32, symbol : "ZPG" },
  { name : "NozickTokenMaths", nb : .72, symbol : "NTM" },
];

function App() {
  
  const [cryptoData, setCryptoData] = useState();
  const [intervalFetchExchangeRates, setIntervalFetchExchangeRates] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStonked, setIsStonked] = useState(false);

  let stonkThreshold = 1.2;
  let imaExchangeRateStart;
  const [stonkAlertPrice, setStonkAlertPrice] = useState(0);

  useEffect(() => {
    setIntervalFetchExchangeRates(
      setInterval(() =>
        fetchExchangeRates()
          .then((resp) => resp.json())
          .then((data) => {
            setCryptoData(data.message);
            
            if (!isLoaded) {
              imaExchangeRateStart = data.message.IMA;
            }

            const pasElegant = imaExchangeRateStart * stonkThreshold;
            if (pasElegant < data.message.IMA) {
              setIsStonked(true);
              setStonkAlertPrice(pasElegant);
              stonkThreshold = 1.2 * pasElegant;
            }
            setIsLoaded(true);
          })
      , 500)
    );
  }, []);

  return(
    <>
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
        isStonked = {isStonked}
        name = "ImacCoin"
        price = {stonkAlertPrice}
      />

      <Footer
        isLoaded = {isLoaded}
        cryptoList = {cryptoList}
        cryptoData = {cryptoData}
      />
    </>
  )
}

export default App;
