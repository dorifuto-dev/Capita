export const fetchStockDetail = (company) => {
  const url = `https://financialmodelingprep.com/api/v3/historical-chart/15min/${company}?apikey=1c2f080351d9a4329c6b22ef21dc46dc`
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        throw new Error('404 Error - Stock or ticker name not found. Please go back and try your search again.')
      } else if (response.status === 500) {
        throw new Error('500 Error - Encountered server error. Please try again.')
      } else {
        throw new Error('Other Error - Something went wrong.')
      }
    })
}

export const fetchSearchSuggestions = (query, exchange) => {
  const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=20&exchange=${exchange}&apikey=1c2f080351d9a4329c6b22ef21dc46dc`
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        throw new Error('404 Error - Search query not found. Please try your search again.')
      } else if (response.status === 500) {
        throw new Error('500 Error - Encountered server error. Please refresh or go back and try again')
      }
    })
}