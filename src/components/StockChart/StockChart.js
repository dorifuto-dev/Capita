import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './StockChart.scss';

defaults.scale.display = false;
defaults.maintainAspectRatio = false;
defaults.responsive = true;

const StockChart = ({stockDetail}) => {

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    let lineColor

    if (stockDetail[0].close >= stockDetail[stockDetail.length - 1].close) {
      lineColor = "#11FF00"
    } else {
      lineColor = "#FF0000"
    }

    return {
      labels: stockDetail.map(detail => detail.dateTime).reverse(),
      datasets: [{
        label: "Stock Price",
        data: stockDetail.map(detail => detail.close.toFixed(2)).reverse(),
        borderColor: lineColor,
        backgroundColor: "#ffffff"
      }],
    };
  }

  return (
    <div className="chart-container">
      <Line 
        data={data} 
        options={{
                interaction: {
                  mode: 'nearest',
                  intersect: false
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
      />
    </div>
  )
}

StockChart.propTypes = {
  stockDetail: PropTypes.array
}

export default StockChart;