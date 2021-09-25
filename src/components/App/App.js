
import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchStockList } from '../../apiCalls';
import { Switch, Route, NavLink } from 'react-router-dom';
import StartLoader from '../StartLoader/StartLoader';
import Search from '../Search/Search';
import heartIcon from '../../images/heart-active-icon.svg';
import searchIcon from '../../images/search-active-icon.svg';
import chartIcon from '../../images/chart-active.svg';

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
        <Switch>
          <Route exact path="/"
            render={() =>
              <>
              { isLoading ? <StartLoader /> : <Search stocks={stockList}/>}
              </>
            }
          />
        </Switch>
        { !isLoading &&
          <nav className="navigation">
            <NavLink to="/explore">
              <img className="chart-icon navbar-img" src={chartIcon}></img>
            </NavLink>
            <NavLink to="/">
              <img className="search-icon navbar-img" src={searchIcon}></img>
            </NavLink>
            <NavLink to="/favorites">
              <img className="heart-icon navbar-img" src={heartIcon}></img>
            </NavLink>
          </nav>
        }
       
      </header>
    </div>
  );
}

export default App;


// { isLoading === 1 && <div class='loader'>
// <h1>HELLO</h1>
// <img className="capita-logo" src={capitaLogo}></img></div>
// }