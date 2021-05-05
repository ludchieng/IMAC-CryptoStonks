import React from 'react';

const StonkAlert = ({name, price}) => (
  <div id="stonk-alert">
    <div id="stonk-alert-image"></div>
    <div id="stonk-alert-crypto">{name}</div>
    <div id="stonk-alert-value">{price}€</div>
  </div>
)

export default StonkAlert;
