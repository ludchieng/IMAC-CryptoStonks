import React from 'react';

class StonkAlert extends React.Component {

  constructor(props) {
    super(props);
    this.cryptoName = props.name;
    this.cryptoPrice = props.price;
  }

  render() {
    return (
      <div id="stonk-alert">
        <div id="stonk-alert-image"></div>
        <div id="stonk-alert-crypto">{this.cryptoName}</div>
        <div id="stonk-alert-value">{this.cryptoPrice}€</div>
      </div>
    )
  }

}

export default StonkAlert;
