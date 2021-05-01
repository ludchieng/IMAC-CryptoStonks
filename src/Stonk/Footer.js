import React from 'react';

class Footer extends React.Component {

  render() {
    if (!this.props.isLoaded) {
      return (
        <div id="Aside"></div>
      )
    } else {
      return (
        <div id="">
          <div className="ticker-wrap">
            <div className="ticker">
              {this.props.cryptoList.map((elt) => (
                <div key={elt.symbol + "Footer"} className="ticker__item">
                  <span className="FooterNameCrypto">{elt.symbol}</span>
                  <span className="FooterPriceCrypto TendancePositiv">
                    {(elt.nb * this.props.cryptoData[elt.symbol]).toFixed(2)}
                    €
                  </span>
                </div>
              ))}
              <div className="ticker__item TwitchChannelName">CRYPTOSTONK : LA CHAINE DE LA CRYPTO ET DE LA STONK</div>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default Footer;
