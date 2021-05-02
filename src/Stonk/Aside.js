import React from 'react';
import StonkChart from './StonkChart'

const Aside = ({ isLoaded, cryptoList, cryptoData }) => {
  if (!isLoaded) {
    return (
      <aside></aside>
    )
  } else {

    return (
      <aside>
        <ul>
          {cryptoList.map((crypto) => (
            <li
              key={`crypto-${crypto.symbol}`}
              onClick={e => handleAsideClick(e, crypto.symbol)}
            >
              <div className="crypto-symbol">{crypto.symbol}</div>
              <div className="crypto-container">
                <div
                  key={`crypto-chart-${crypto.symbol}`}
                  id={crypto.symbol}
                  className="crypto-chart"
                >
                  <StonkChart cryptoSymbol={crypto.symbol} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    )
  }
}

const handleAsideClick = (event) => {
  event.preventDefault();
  const cryptoBtn = event.target.parentNode;
  const cryptoList = document.querySelectorAll("aside ul li"); // ALED c pa bo
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
