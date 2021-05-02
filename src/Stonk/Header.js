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
            <div class="label">Dernier Abonné</div>
            <div class="value"> {this.subscriber}</div>
          </li>
          <li>
            <div class="label">Dernier Follower</div>
            <div class="value"> {this.follower}</div>
          </li>
          <li>
            <div class="label">Dernier Don</div>
            <div class="value"> {this.donator} - {this.donation}€</div>
          </li>
        </ul>
      </header>
    )
  }

}

export default StonkAlert;
