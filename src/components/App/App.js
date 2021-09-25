
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
          <Route exact path="/explore"
            render={() =>
              <>
              </>
            }
          />  
        </Switch>
        { !isLoading &&
          <nav className="navigation">
            <NavLink 
              exact to="/explore"
              activeStyle={{filter: "brightness(0) invert(1)"}}
              >
              <img 
                className="chart-icon navbar-img" 
                src={chartIcon} 
                alt="Explore Icon">
              </img>
            </NavLink>
            <NavLink 
              exact to="/"
              activeStyle={{filter: "brightness(0) invert(1)"}}
              >
              <img 
                className="search-icon navbar-img" 
                src={searchIcon} 
                alt="Search Icon">
              </img>
            </NavLink>
            <NavLink 
              exact to="/favorites"
              activeStyle={{filter: "brightness(0) invert(1)"}}
              >
              <img 
                className="heart-icon navbar-img" 
                src={heartIcon} 
                alt="Favorites Icon">
              </img>
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