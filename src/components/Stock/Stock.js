import React, { useEffect, useState } from 'react';

const Stock = ({ updateStockDetail, stockDetail, query }) => {
  const [stockData, setStockData] = useState([])

  useEffect(() => {
    updateStockDetail(query)
  }, [])

  return (
    <div>

    </div>
  )
}

export default Stock;

//MAY CHANGE NAME TO DETAIL, CHART, etc.