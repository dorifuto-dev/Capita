export const fetchStockList = () => {
  const url = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=1c2f080351d9a4329c6b22ef21dc46dc'
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 500) {
        throw Error('500 Error - Encountered Server Error. Please try again.')
      } else {
        throw Error('Other Error - Something went wrong.')
      }
    })
}