import React, { useRef, useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import './StockChart.css';

const chartConfig = {
  type: 'line',
  data: {
    // Bring in Data from Stock as prop
  }
}

const StockChart = () => {
  const chartRef = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, setChartInstance(newChartInstance))
    }
  }, [])
}

export default StockChart;