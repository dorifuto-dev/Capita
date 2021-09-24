import logo from '../../images/logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchStockList } from '../../apiCalls';

const App = () => {
  const [stockList, setStockList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [stockListError, setStockListError] = useState('')

  useEffect(() => {
    updateStockList()
    setIsLoading(false)
  }, [])

  const updateStockList = () => {
    setIsLoading(true)
    fetchStockList()
      .then(data => setStockList(data))
      .catch(error => setStockListError(error.message))
    
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
