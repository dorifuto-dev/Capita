const dayjs = require('dayjs');
const thousands = require('thousands');

export const cleanStockDetailData = (stockDetailData) => {
  return stockDetailData.map(history => {
    const date = history.date.split(' ')[0]
    return {
      date: dayjs(date).format('MMM DD, YYYY'),
      time: dayjs(history.date).format('h:mm A'),
      open: history.open,
      close: history.close,
      low: history.low,
      high: history.high,
      volume: history.volume
    }
  })
}

export const dollarizeNumber = (number) => {
  return `$${number.toFixed(2)}`
}