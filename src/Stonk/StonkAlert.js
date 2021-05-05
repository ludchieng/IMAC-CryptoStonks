import React from 'react';

const StonkAlert = ({cryptoName, cryptoPrice}) => (
  <div id="stonk-alert">
    <div id="stonk-alert-image"></div>
    <div id="stonk-alert-crypto">{cryptoName}</div>
    <div id="stonk-alert-value">{cryptoPrice}€</div>
  </div>
)

export default StonkAlert;
