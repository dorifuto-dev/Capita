import React, { useState, useEffect } from 'react';
import { fetchFortuneList, fetchStockDetail } from '../../apiCalls';
import { cleanStockDetailData } from '../../dataCleaning';
import { Switch, Route, NavLink } from 'react-router-dom';
import StartLoader from '../StartLoader/StartLoader';
import Search from '../Search/Search';
import Stock from '../Stock/Stock';
import heartIcon from '../../images/heart-active-icon.svg';
import searchIcon from '../../images/search-active-icon.svg';
import chartIcon from '../../images/chart-active.svg';
import './App.scss';

const App = () => {
  const [fortuneList, setFortuneList] = useState([])
  const [stockDetail, setStockDetail] = useState([])
  const [fortuneListError, setFortuneListError] = useState('')
  const [stockDetailError, setStockDetailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    updateFortuneList()
  }, [])

  // CURRENTLY UNUSED hook - fortuneList ^
  const updateFortuneList = async () => {
    setIsLoading(true)
    await fetchFortuneList()
      .then(data => setFortuneList(data))
      .catch(error => setFortuneListError(error.message))
    setTimeout(() => setIsLoading(false), 2500)
  }

  const updateStockDetail = async (company) => {
    await fetchStockDetail(company)
      .then(data => cleanStockDetailData(data.slice(0, 135)))
      .then(data => setStockDetail(data))
      .catch(error => console.log(error.message))
  }

  const clearStockDetail = () => {
    setStockDetail([])
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
                <p className="search-title">Find Stocks</p>
                <Search 
                  stocks={fortuneList} 
                />
              </section>  
              }
              </>
            }
          />
          <Route exact path={"/explore"}
            render={() =>
              <>
              </>
            }
          />  
          <Route exact path={"/favorites"}
            render={() =>
              <>
              </>
            }
          /> 
          <Route exact path={"/stock/:company"}
            render={({ match }) =>
              <>
                
                <Stock 
                  updateStockDetail={updateStockDetail}
                  stockDetail={stockDetail}
                  query={match.params.company}
                />
                
              </>
            }
          /> 
        </Switch>
        { !isLoading &&
          <nav className="navigation">
            <NavLink 
              exact to="/explore"
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