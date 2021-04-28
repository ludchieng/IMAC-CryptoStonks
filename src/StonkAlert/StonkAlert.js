import React from 'react';

class StonkAlert extends React.Component {

    constructor(props){
        super(props);
        this.cryptoName = props.name;
        this.cryptoPrice = props.price;
    }

    render(){
        return(   
            <div id="StonkAlert">
                <div id="StonkAlertImage"></div>
                <div id="StonkAlertName">{this.cryptoName}</div>
                <div id="StonkAlertPrice">{this.cryptoPrice}</div>
            </div>
        )
    }

}
  
export default StonkAlert;
  