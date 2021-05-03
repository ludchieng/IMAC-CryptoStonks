import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div id="logo">{this.props.name}</div>
        <ul>
          <li>
            <div className="label">Dernier Abonné</div>
            <div className="value"> {this.props.subscriber}</div>
          </li>
          <li>
            <div className="label">Dernier Follower</div>
            <div className="value"> {this.props.follower}</div>
          </li>
          <li>
            <div className="label">Dernier Don</div>
            <div className="value"> {this.props.donator} - {this.props.donation}€</div>
          </li>
        </ul>
      </header>
    )
  }

}

export default Header;
