import React from 'react';

class StonkAlert extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.follower = props.follower;
    this.subscriber = props.subscriber;
    this.donator = props.donator;
    this.donation = props.donation;
  }

  render() {
    return (
      <header>
        <div id="logo">{this.name}</div>
        <ul>
          <li>
            <div className="label">Dernier Abonné</div>
            <div className="value"> {this.subscriber}</div>
          </li>
          <li>
            <div className="label">Dernier Follower</div>
            <div className="value"> {this.follower}</div>
          </li>
          <li>
            <div className="label">Dernier Don</div>
            <div className="value"> {this.donator} - {this.donation}€</div>
          </li>
        </ul>
      </header>
    )
  }

}

export default StonkAlert;
