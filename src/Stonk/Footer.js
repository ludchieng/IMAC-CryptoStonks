import React from 'react';

class Footer extends React.Component {

  render() {
    if (!this.props.isLoaded) {
      return (
        <footer></footer>
      )
    } else {
      return (
        <footer>
          <ul>
            <li>Solde :</li>
            {this.props.cryptoList.map((crypto) => (
              <li key={`ticker-${crypto.symbol}`}>
                <span className="crypto-symbol">{crypto.symbol}</span>
                <span className="crypto-balance crypto-balance-stonk">
                  {(crypto.nb * this.props.cryptoData[crypto.symbol]).toFixed(2)}
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
    }
  }

}

export default Footer;
