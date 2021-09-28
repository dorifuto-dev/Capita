import React, { useRef, useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import PropTypes from 'prop-types';
import './StockChart.scss';

Chart.defaults.scale.display = false;
Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;
Chart.register(...registerables)

const StockChart = ({stockDetail}) => {
  const chartContainer = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)

  const chartConfig = {
    type: 'line',
    data: {
      labels: stockDetail.map(detail => detail.dateTime).reverse(),
      datasets: [
        {
          label: "Stock Price",
          data: stockDetail.map(detail => detail.close.toFixed(2)).reverse(),
          borderColor: "#00ffff",
          backgroundColor: "#ffffff"
        }
      ]
    },
    options: {
      interaction: {
        mode: 'nearest'
      },
      plugins: {
        legend: {
          display: false
        }
      },
      layout: {
        padding: {
          top: 5,
          left: 15,
          right: 15,
          bottom: 15
        }
      },
      elements: {
        point: {
          hitRadius: 15,
          hoverRadius: 15,
          radius: 0
        }
      }
    }
  }

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig)
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  return (
    <div className="chart-container">
      <canvas className="stock-chart" ref={chartContainer} />
    </div>
  )
}

StockChart.propTypes = {
  stockDetail: PropTypes.array
}

export default StockChart;