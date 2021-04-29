import React from 'react';

class StonkAlert extends React.Component {

    constructor(props){
        super(props);
        this.name = props.name;
        this.follower = props.follower;
        this.subscriber = props.subscriber;
        this.donator = props.donator;
        this.donation = props.donation;
    }

    render(){
        return(   
            <div id="TopSideBar">
                <div id="TopSideBarName">{this.name}</div>
                <div id="TopSideBarSubscriber">
                    <div>Dernier Abonné : </div>
                    <div> {this.subscriber}</div>
                </div>
                <div id="TopSideBarFollower">
                    <div>Dernier Follower : </div>
                    <div> {this.follower}</div>
                </div>
                <div id="TopSideBarDonation">
                    <div>Dernier Don : </div>
                    <div> {this.donator} - {this.donation}€</div>
                </div>
            </div>
        )
    }

}
  
export default StonkAlert;
  