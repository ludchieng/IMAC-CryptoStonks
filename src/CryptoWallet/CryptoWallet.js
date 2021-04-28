import React from 'react';
import fetchExchangeRates from'../StonkFetcher/stonkfetcher';

class CryptoWallet extends React.Component {

    constructor(props){
        super(props);
        this.cryptoList = props.cryptoList;
        this.cryptoData = props.data
    }

    render() {
        return(
            <div id="">
                <div className="ticker-wrap">
                    <div className="ticker">
                        {this.cryptoList.map( (elt) => (
                            <div key={elt.symbol+"CryptoWallet"} className="ticker__item">
                                <span className="CryptoWalletNameCrypto">${elt.symbol}</span>
                                <span className="CryptoWalletPriceCrypto TendancePositiv">{elt.nb * elt.price}€</span>
                            </div> 
                        ))}
                        <div className="ticker__item TwitchChannelName">CRYPTOSTONK : LA CHAINE DE LA CRYPTO ET DE LA STONK</div>    
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CryptoWallet;