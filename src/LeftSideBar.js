import React from 'react';

class LeftSideBar extends React.Component {

    constructor(props){
        super(props);
        this.cryptoList = props.cryptoList;
    }

    handleLeftSideBarClick = (s) => {
        let temp = document.getElementById(s);
        console.log(temp);
    }

    render() {
        return(
            <div id="LeftSideBar">
                {console.log(this.cryptoList)}
                <div id="LeftSideBarCryptoSelector">
                    {this.cryptoList.map( (e) => (<div className="LeftSideBarCrypto" onClick = { handleLeftSideBarClick => (e.symbol)} > {e.symbol} {e.price}</div>))}
                </div>
                <div id="LeftSideBarCryptoCharts">
                    {this.cryptoList.map( (e) => (<div className="LeftSideBarCryptoChart" onClick = { handleLeftSideBarClick => (e.symbol)} > {e.symbol}</div>))}
                </div>
            </div>
        )
    }
    
}

export default LeftSideBar;