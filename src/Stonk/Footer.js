import React from 'react';

const Footer = ({isLoaded, cryptoList, cryptoData}) => (
  !isLoaded ? (
    <footer></footer>
  ) : (
    <footer>
      <ul>
        <li>Solde :</li>
        {cryptoList.map((crypto) => (
          <li key={`ticker-${crypto.symbol}`}>
            <span className="crypto-symbol">{crypto.symbol}</span>
            <span className="crypto-balance crypto-balance-stonk">
              {(crypto.nb * cryptoData[crypto.symbol]).toFixed(2)}
              €
            </span>
          </li>
        ))}
        <li className="ticker-message">
          CryptoStonk : la chaîne de la crypto et de la stonk
        </li>
      </ul>
    </footer>
  )
)

export default Footer;
