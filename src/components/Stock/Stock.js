import React, { useEffect, useState } from 'react';
import { dollarizeNumber } from '../../dataCleaning';
import StockChart from '../StockChart/StockChart';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import './Stock.scss';

const Stock = ({ updateSavedStocks, updateStockDetail, stockDetail, ticker, company }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    mountStock()
  }, [])

  const mountStock = async () => {
    await updateStockDetail(ticker)
    setTimeout(() => setIsLoading(false), 2500)
  }

  return (
    <div className="stock-component-container">
      { (isLoading || !stockDetail) ? <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" /> :
        <article className="stock-component">
          <section className="stock-info">
            <h1 className="ticker-title">{ticker}</h1>
            <h1 className="company-title">{company}</h1>
            <p className="last-updated">{`Last updated on ${stockDetail[0].dateTime}`}</p>
            <p className="latest-price">{`Latest Price: ${dollarizeNumber(stockDetail[0].close)}`}</p>
            <button className="favorite-stock" onClick={(event) => updateSavedStocks(event, {name: company, id: Date.now(), symbol: ticker})}>Favorite Stock</button>
          </section>
          <StockChart 
            stockDetail={stockDetail}
          />
        </article>
      }
    </div>
  )
}

Stock.propTypes = {
  updateSavedStocks: PropTypes.func,
  updateStockDetail: PropTypes.func,
  stockDetail: PropTypes.array,
  ticker: PropTypes.string,
  company: PropTypes.string
}

export default Stock;

