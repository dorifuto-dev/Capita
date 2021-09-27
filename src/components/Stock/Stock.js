import React, { useEffect, useState } from 'react';
import { dollarizeNumber } from '../../dataCleaning';
import StockChart from '../StockChart/StockChart';
import Loader from 'react-loader-spinner';
import './Stock.scss';
const thousands = require('thousands');

const Stock = ({ updateStockDetail, stockDetail, query }) => {
  const [stockData, setStockData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    mountStock()
  }, [])

  const mountStock = async () => {
    setIsLoading(true)
    await updateStockDetail(query)
    await setStockData(stockDetail)
    setTimeout(() => setIsLoading(false), 2500)
  }

  return (
    <div>
      { (isLoading || !stockDetail) ? <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" /> :
        <div>
          <StockChart 
            stockDetail={stockDetail}
          />
          <h1 className="stock-title">{query}</h1>
          <p className="last-updated">{`Last updated on ${stockDetail[0].dateTime}`}</p>
          <p className="latest-price">{`Latest Price: ${dollarizeNumber(stockDetail[0].close)}`}</p>
          
        </div>
      }
    </div>
  )
}

export default Stock;

//MAY CHANGE NAME TO DETAIL, CHART, etc.

