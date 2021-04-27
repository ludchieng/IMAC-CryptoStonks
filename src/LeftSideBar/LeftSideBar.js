import React from 'react';
import StonkChart from '../StonkChart/stonkchart'


class LeftSideBar extends React.Component {

    constructor(props){
        super(props);
        this.cryptoList = props.cryptoList;
        this.cryptoData = props.data
    }

    handleLeftSideBarClick = (e, id) => {
        e.preventDefault();
        const cryptoBtn = e.target.parentNode;
        const cryptoList = document.getElementsByClassName("LeftSideBarCrypto");
        for (let c of cryptoList){
            if(c.classList.contains("disparition")){
                c.classList.remove("disparition");
            }
            if(c.classList.contains("active")){
                c.classList.remove("active");
                c.classList.add("disparition");
            }
        }
        if(!cryptoBtn.classList.contains("disparition")){
            cryptoBtn.classList.add("active");
        }
    }

    render() {
        return(
            <div id="LeftSideBar">
                <div id="LeftSideBarCryptoSelector">
                    { this.cryptoList.map( (crypto) => (
                        <div
                            key={"LeftSideBarCryptoSelector"+crypto.symbol}
                            className="LeftSideBarCrypto"
                            onClick = { e => this.handleLeftSideBarClick(e, crypto.symbol)}
                        >
                            <div class="LeftSideBarCryptoSymbol">{crypto.symbol}</div>
                            <div className="LeftSideBarCryptoChartContainer">
                                <div
                                    key={"LeftSideBarCryptoChart"+crypto.symbol}
                                    id={crypto.symbol}
                                    className="LeftSideBarCryptoChart"
                                >
                                    <StonkChart />
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        )
    }
    
}

export default LeftSideBar;