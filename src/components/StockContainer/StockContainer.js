import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import './StockContainer.scss';

const StockContainer = ({savedStocks}) => {
  const [favoritedJSX, setFavoritedJSX] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFavoritedJSX()
  }, [savedStocks])

  const getFavoritedJSX = async () => {
      if (savedStocks) {
        await setFavoritedJSX (
          savedStocks.map(stock => {
            return (
              <Link to={`/stock/${stock.symbol}&${stock.name}`} className="favorited-link">
                <div className="favorited-button" key={stock.id}>{stock.name}</div>
              </Link>
            )  
          })
        )
        setTimeout(() => setIsLoading(false), 1000)
      }      
  }

  return (
    <div>
       { isLoading ? <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" /> :
        <section className="favorited-container">{favoritedJSX}</section> }
    </div>
  )
}

StockContainer.propTypes = {
  savedStocks: PropTypes.array
}

export default StockContainer;