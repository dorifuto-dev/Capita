const dayjs = require('dayjs');

export const cleanStockDetailData = (stockDetailData) => {
  return stockDetailData.map(history => {
    const date = history.date.split(' ')[0]
    const time = history.date.split(' ')[1]
    return {
      date: dayjs(date).format('MMM DD, YYYY'),
      time: dayjs(time).format('h:m'),
      open: `$${history.open.toFixed(2)}`,
      close: `$${history.close.toFixed(2)}`,
      low: `$${history.low.toFixed(2)}`,
      high: `$${history.high.toFixed(2)}`,
      volume: String.format('{0:n0}', history.volume)
    }
  })
}