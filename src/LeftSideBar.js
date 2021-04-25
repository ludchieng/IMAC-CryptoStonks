import React from 'react';

class LeftSideBar extends React.Component {

    handleLeftSideBarClick = (name) => {
        let temp = document.getElementById(name);
        console.log(temp);
    }

    render() {
        return(
            <div id="LeftSideBar">
                <div id="LeftSideBarCryptoSelector">
                    <div className="LeftSideBarCrypto" onClick = { handleLeftSideBarClick => ("$BTC")} >$BTC</div>
                    <div className="LeftSideBarCrypto">$ETH</div>
                    <div className="LeftSideBarCrypto">$BAT</div>
                    <div className="LeftSideBarCrypto">$DAI</div>
                </div>
                <div id="LeftSideBarCryptoCharts">
                    <div id="$BTC" className="LeftSideBarCryptoChart active">$BTC</div>
                    <div id="$ETH" className="LeftSideBarCryptoChart">$ETH</div>
                    <div id="$BAT" className="LeftSideBarCryptoChart">$BAT</div>
                    <div id="$DAI" className="LeftSideBarCryptoChart">$DAI</div>
                </div>
            </div>
        )
    }
    
}

export default LeftSideBar;