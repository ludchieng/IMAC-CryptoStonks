import React from 'react';

const Header = ({name, follower, subscriber, donator, donation}) => (
  <header>
    <div id="logo">{name}</div>
    <ul>
      <li>
        <div className="label">Dernier Abonné</div>
        <div className="value"> {subscriber}</div>
      </li>
      <li>
        <div className="label">Dernier Follower</div>
        <div className="value"> {follower}</div>
      </li>
      <li>
        <div className="label">Dernier Don</div>
        <div className="value"> {donator} - {donation}€</div>
      </li>
    </ul>
  </header>
)

export default Header;
