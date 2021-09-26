const dayjs = require('dayjs');
const thousands = require('thousands');

export const cleanStockDetailData = (stockDetailData) => {
  return stockDetailData.map(history => {
    const date = history.date.split(' ')[0]
    const time = history.date.split(' ')[1]
    return {
      date: dayjs(date).format('MMM DD, YYYY'),
      time: dayjs(history.date).format('h:mm A'),
      open: `$${thousands(history.open.toFixed(2))}`,
      close: `$${thousands(history.close.toFixed(2))}`,
      low: `$${thousands(history.low.toFixed(2))}`,
      high: `$${thousands(history.high.toFixed(2))}`,
      volume: thousands(history.volume)
    }
  })
}