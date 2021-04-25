import React from 'react';

class LeftSideBar extends React.Component {


    constructor(props){
        super(props);
        this.cryptoList = props.cryptoList;
    }

    handleLeftSideBarClick = (e, name) => {
        e.preventDefault();
        let temp = document.getElementById(name);
        let elements = document.getElementsByClassName("LeftSideBarCryptoChart");
        for (let i = 0; i < elements.length; i++){
            if(elements[i].classList.contains("disparition")){
                elements[i].classList.remove("disparition");
            }
            if(elements[i].classList.contains("active")){
                elements[i].classList.remove("active");
                elements[i].classList.add("disparition");
            }
        }
        if(!temp.classList.contains("disparition")){
            temp.classList.add("active");
            //temp.classList.remove("disparition");
        }
        //temp.classList.add("active");
        console.log(temp);
    }

    render() {
        return(
            <div id="LeftSideBar">
                {console.log(this.cryptoList)}
                <div id="LeftSideBarCryptoSelector">
                    {this.cryptoList.map( (elt) => (<div key={"LeftSideBarCryptoSelector"+elt.symbol} className="LeftSideBarCrypto" onClick = { e => this.handleLeftSideBarClick(e, elt.symbol)} > {elt.symbol} {elt.price}€</div>))}
                </div>
                <div id="LeftSideBarCryptoCharts">
                    {this.cryptoList.map( (elt) => (<div key={"LeftSideBarCryptoCharts"+elt.symbol} id={elt.symbol} className="LeftSideBarCryptoChart"> {elt.symbol}</div>))}
                </div>
            </div>
        )
    }
    
}

export default LeftSideBar;