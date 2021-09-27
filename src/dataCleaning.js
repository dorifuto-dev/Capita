const dayjs = require('dayjs');
const thousands = require('thousands');

export const cleanStockDetailData = (stockDetailData) => {
  return stockDetailData.map(history => {
    const date = history.date.split(' ')[0]
    return {
      date: dayjs(date).format('MMM DD, YYYY'),
      timeStart: dayjs(history.date).format('h:mm A'),
      dateTime: dayjs(history.date).format('MMM DD, YYYY h:mm A'),
      timeEnd: addTimeIncrement(history.date, 15),
      open: history.open,
      close: history.close,
      low: history.low,
      high: history.high,
      volume: history.volume
    }
  })
}

const addTimeIncrement = (time, increment) => {
  return dayjs(time).add(increment, 'minutes').format('h:mm A')
}

export const dollarizeNumber = (number) => {
  return `$${thousands(number.toFixed(2))}`
}