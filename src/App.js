import './App.css';

function App() {
  return (
    <div id="LeftSideBar">
      <div id="LeftSideBarCryptoSelector">
        <div className="LeftSideBarCrypto active">$BTC</div>
        <div className="LeftSideBarCrypto">$ETH</div>
        <div className="LeftSideBarCrypto">$BAT</div>
        <div className="LeftSideBarCrypto">$DAI</div>
      </div>
      <div id="LeftSideBarCryptoCharts">
        <div className="LeftSideBarCryptoChart">$BTC</div>
        <div className="LeftSideBarCryptoChart">$ETH</div>
        <div className="LeftSideBarCryptoChart">$BAT</div>
        <div className="LeftSideBarCryptoChart">$DAI</div>
      </div>
    </div>
  );
}

export default App;
