import React, { useEffect, useState } from 'react';
import StockChart from '../StockChart/StockChart';
import Loader from 'react-loader-spinner';
import './Stock.scss';

const Stock = ({ updateStockDetail, stockDetail, query }) => {
  const [stockData, setStockData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    mountStock()
  }, [])

  const mountStock = async () => {
    setIsLoading(true)
    await updateStockDetail(query)
    setTimeout(() => setIsLoading(false), 2500)
  }

  return (
    <div>
      { isLoading ? <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" /> :
      <div>
        <StockChart 
          stockDetail={stockDetail}
        />
      </div>}
    </div>
  )
}

export default Stock;

//MAY CHANGE NAME TO DETAIL, CHART, etc.