import React, { useState, useEffect } from 'react';
import { fetchStockDetail } from '../../apiCalls';
import { cleanStockDetailData } from '../../dataCleaning';
import { Switch, Route, NavLink } from 'react-router-dom';
import StartLoader from '../StartLoader/StartLoader';
import Search from '../Search/Search';
import Stock from '../Stock/Stock';
import StockContainer from '../StockContainer/StockContainer';
import heartIcon from '../../images/heart-active-icon.svg';
import searchIcon from '../../images/search-active-icon.svg';
import chartIcon from '../../images/chart-active.svg';
import './App.scss';

const App = () => {
  const [stockDetail, setStockDetail] = useState(null)
  const [stockDetailError, setStockDetailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [savedStocks, setSavedStocks] = useState(null)

  useEffect(() => {
    startApp()
  }, [])

  useEffect(() => {
    pushToLocalStorage()
  }, [savedStocks])

  const startApp = async () => {
    setIsLoading(true)
    await retrieveFromLocalStorage();
    setTimeout(() => setIsLoading(false), 2500)
  }

  const updateStockDetail = async (company) => {
    await fetchStockDetail(company)
      .then(data => cleanStockDetailData(data.slice(0, 135)))
      .then(data => setStockDetail(data))
      .catch(error => setStockDetailError(error.message))
  }

  const clearStockDetail = () => {
    setStockDetail(null)
  }

  const updateSavedStocks = async (event, stock) => {
    event.preventDefault()
    if (!savedStocks) {
      setSavedStocks([stock])
    } else {
      setSavedStocks([...savedStocks, stock])
    }
  }

  const pushToLocalStorage = () => {
    const stringifiedSavedStocks = JSON.stringify(savedStocks)
    localStorage.setItem("savedStocks", stringifiedSavedStocks)
  }

  const retrieveFromLocalStorage = async () => {
    const savedStockData = JSON.parse(localStorage.getItem("savedStocks"))
    await setSavedStocks(savedStockData)
  }  

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path={"/"}
            render={() =>
              <>
              { isLoading ? <StartLoader /> : 
              <section className="search-page">
                <p className="page-title">Find Stocks</p>
                <Search />
              </section>  
              }
              </>
            }
          />
          <Route exact path={"/explore"}
            render={() =>
              <>
                <p className="page-title">Explore Stocks</p>
                <p className="coming-soon">Coming Soon...</p>
              </>
            }
          />  
          <Route exact path={"/favorites"}
            render={() =>
              <>
                <p className="page-title">Favorite Stocks</p>
                <StockContainer savedStocks={savedStocks} />
              </>
            }
          /> 
          <Route exact path={"/stock/:ticker&:company"}
            render={({ match }) =>
              <>
                <Stock 
                  updateSavedStocks={updateSavedStocks}
                  updateStockDetail={updateStockDetail}
                  stockDetail={stockDetail}
                  company={match.params.company}
                  ticker={match.params.ticker}
                />   
              </>
            }
          /> 
        </Switch>
        { !isLoading &&
          <nav className="navigation">
            <NavLink 
              exact to="/explore"
              className="nav-link"
              onClick={() => clearStockDetail()}
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
              className="nav-link"
              onClick={() => clearStockDetail()}
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
              className="nav-link"
              onClick={() => clearStockDetail()}
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