import React, { useEffect, useState } from 'react';
import { dollarizeNumber } from '../../dataCleaning';
import StockChart from '../StockChart/StockChart';
import Loader from 'react-loader-spinner';
import './Stock.scss';
const thousands = require('thousands');

const Stock = ({ updateSavedStocks, updateStockDetail, stockDetail, ticker, company }) => {
  const [stockData, setStockData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    mountStock()
  }, [])

  const mountStock = async () => {
    setIsLoading(true)
    await updateStockDetail(ticker)
    await setStockData(stockDetail)
    setTimeout(() => setIsLoading(false), 2500)
  }

  return (
    <div>
      { (isLoading || !stockDetail) ? <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" /> :
        <div>
         
          <section className="stock-info">
            <h1 className="ticker-title">{ticker}</h1>
            <h1 className="company-title">{company}</h1>
            <p className="last-updated">{`Last updated on ${stockDetail[0].dateTime}`}</p>
            <p className="latest-price">{`Latest Price: ${dollarizeNumber(stockDetail[0].close)}`}</p>
          </section>
          <StockChart 
            stockDetail={stockDetail}
          />
        </div>
      }
    </div>
  )
}

export default Stock;

//MAY CHANGE NAME TO DETAIL, CHART, etc.

