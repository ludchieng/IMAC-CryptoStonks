import { useState } from 'react';
import './App.css';
import LeftSideBar from "./LeftSideBar"

let cryptoList=[
  {name : "ImacCoin", price : 10, symbol : "$IMA"}, 
  {name : "SaltCoin", price : 100, symbol : "$SLT"}]


function App() {
  
  const [crypto, setCrypto] = useState(cryptoList);

  return(
    <LeftSideBar
      cryptoList = {crypto}
    />
  )
}

export default App;
