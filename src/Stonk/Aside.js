import React from 'react';
import StonkChart from './StonkChart'

const Aside = ({isLoaded, cryptoList, cryptoData}) => {
  if (!isLoaded) {
    return (
      <div id="Aside"></div>
    )
  } else {

    return (
      <div id="Aside">
        <div id="AsideCryptoSelector">
          {cryptoList.map((crypto) => (
            <div
              key={"AsideCryptoSelector" + crypto.symbol}
              className="AsideCrypto"
              onClick={e => handleAsideClick(e, crypto.symbol)}
            >
              <div className="AsideCryptoSymbol">{crypto.symbol}</div>
              <div className="AsideCryptoChartContainer">
                <div
                  key={"AsideCryptoChart" + crypto.symbol}
                  id={crypto.symbol}
                  className="AsideCryptoChart"
                >
                  <StonkChart cryptoSymbol={crypto.symbol} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const handleAsideClick = (event) => {
  event.preventDefault();
  const cryptoBtn = event.target.parentNode;
  const cryptoList = document.getElementsByClassName("AsideCrypto"); // ALED c pa bo
  for (let c of cryptoList) { // ALED c pa bo
    if (c.classList.contains("disparition")) {
      c.classList.remove("disparition");
    }
    if (c.classList.contains("active")) {
      c.classList.remove("active");
      c.classList.add("disparition");
    }
  }
  if (!cryptoBtn.classList.contains("disparition")) {
    cryptoBtn.classList.add("active");
  }
}

export default Aside;
