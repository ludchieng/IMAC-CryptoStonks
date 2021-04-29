import React from 'react';
import StonkChart from './StonkChart'


class Aside extends React.Component {

  constructor(props) {
    super(props);
    this.cryptoList = props.cryptoList;
    this.cryptoData = props.data;
  }

  handleAsideClick = (e, id) => {
    e.preventDefault();
    const cryptoBtn = e.target.parentNode;
    const cryptoList = document.getElementsByClassName("AsideCrypto");
    for (let c of cryptoList) {
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

  render() {
    return (
      <div id="Aside">
        <div id="AsideCryptoSelector">
          {this.cryptoList.map((crypto) => (
            <div
              key={"AsideCryptoSelector" + crypto.symbol}
              className="AsideCrypto"
              onClick={e => this.handleAsideClick(e, crypto.symbol)}
            >
              <div className="AsideCryptoSymbol">{crypto.symbol}</div>
              <div className="AsideCryptoChartContainer">
                <div
                  key={"AsideCryptoChart" + crypto.symbol}
                  id={crypto.symbol}
                  className="AsideCryptoChart"
                >
                  <StonkChart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

}

export default Aside;
