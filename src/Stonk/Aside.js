import React from 'react';
import StonkChart from './StonkChart'

const Aside = ({ isLoaded, cryptoList, cryptoData }) => {
  if (!isLoaded) {
    return (
      <aside hidden></aside>
    )
  } else {

    return (
      <aside>
        <ul>
          {cryptoList.map((crypto) => (
            <li
              key={`crypto-${crypto.symbol}`}
              onClick={event => handleAsideClick(event)}
            >
              <div className="crypto-btn">
                <div className="no-click">
                  <div className="crypto-symbol">
                    {crypto.symbol}
                  </div>
                  <div className="crypto-value">
                    {cryptoData[crypto.symbol].toFixed(2)}
                    €
                  </div>
                </div>
              </div>
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
  const classList = event.target.parentNode.classList;
  if (classList.contains("show")) {
    classList.remove("show");
    classList.add("hide");
  } else {
    classList.remove("hide");
    classList.add("show");
  }
}

export default Aside;
