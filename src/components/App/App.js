
import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchStockList } from '../../apiCalls';
import StartLoader from '../StartLoader/StartLoader';
import Search from '../Search/Search';

const App = () => {
  const [stockList, setStockList] = useState([])
  const [stockListError, setStockListError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    updateStockList()
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  const updateStockList = () => {
      fetchStockList()
      .then(data => setStockList(data.slice(0, 10000)))
      .catch(error => setStockListError(error.message))
  }

  return (
    <div className="App">
      <header className="App-header">
        { isLoading ? <StartLoader /> : <Search />}
      </header>
    </div>
  );
}

export default App;


// { isLoading === 1 && <div class='loader'>
// <h1>HELLO</h1>
// <img className="capita-logo" src={capitaLogo}></img></div>
// }