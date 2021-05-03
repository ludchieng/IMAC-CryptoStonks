import React, { useState, forceUpdate } from 'react';
import StonkChart from './StonkChart'

const Aside = ({ isLoaded, cryptoList, cryptoData }) => {
  const [active, setActive] = useState({
    'IMA': false,
    'SLT': false,
    'OGL': false,
    'ZPG': false,
    'NTM': false,
  });
  console.log('INIT', active)

  const handleAsideClick = (event, cryptoSymbol) => {
    event.preventDefault();
    active[cryptoSymbol] = !active[cryptoSymbol];
  }

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
              onClick={event => handleAsideClick(event, crypto.symbol)}
              className={(active[crypto.symbol]) ? 'show' : 'hide'}
            >
              <div className="crypto-btn">
                <div className="no-click">
                  <div className="crypto-symbol">
                    {active[crypto.symbol].toString()}
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

export default Aside;
