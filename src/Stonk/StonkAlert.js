import React from 'react';

class StonkAlert extends React.Component {

  render() {
    if (!this.props.isLoaded) {
      return (
        <div id="stonk-alert"></div>
      )
    } else {
      return (
        <div id="stonk-alert" className={this.props.isStonked ? 'visible' : 'hidden'}>
          <div id="stonk-alert-image"></div>
          <div id="stonk-alert-crypto">{this.props.name}</div>
          <div id="stonk-alert-value">{this.props.price.toFixed(2)}€</div>
        </div>
      )
    }
  }

}

export default StonkAlert;
