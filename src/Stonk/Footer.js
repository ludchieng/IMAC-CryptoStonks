import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.cryptoList = props.cryptoList;
    this.cryptoData = props.data;
  }

  render() {
    return (
      <div id="">
        <div className="ticker-wrap">
          <div className="ticker">
            {this.cryptoList.map((elt) => (
              <div key={elt.symbol + "Footer"} className="ticker__item">
                <span className="FooterNameCrypto">${elt.symbol}</span>
                <span className="FooterPriceCrypto TendancePositiv">{elt.nb * elt.price}€</span>
              </div>
            ))}
            <div className="ticker__item TwitchChannelName">CRYPTOSTONK : LA CHAINE DE LA CRYPTO ET DE LA STONK</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Footer;
