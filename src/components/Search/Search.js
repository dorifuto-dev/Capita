import React, { useState, useEffect } from 'react';
import { fetchSearchSuggestions } from '../../apiCalls';
import { Link } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [query, setQuery] = useState('')
  const [exchange, setExchange] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [searchError, setSearchError] = useState('')
  const [noResultsError, setNoResultsError] = useState('')

  useEffect(() => {
    if (searchResults && !searchResults.length) {
      updateNoResults()
    }
  }, [searchResults])

  const updateNoResults = async () => {
    setNoResultsError('No results found. Please try your search again.')
    setTimeout(() => setNoResultsError(''), 3000)
  }

  const handleFormChange = (event) => {
    event.preventDefault()
    if (event.target.id === "exchangeSelect") {
      setExchange(event.target.value)
    } else {
      setQuery(event.target.value.toUpperCase())
    }
  }

  const getSearchResults = async (event, query, exchange) => {
    event.preventDefault()
    if (query && exchange) {
      await fetchSearchSuggestions(query, exchange)
        .then(data => createSearchResultLinks(data))
        .then(data => setSearchResults(data))
        .catch(error => setSearchError(error.message))
    } else {
      await setSearchError('Please fill out both fields.')
      setTimeout(() => setSearchError(''), 3000)
    }
  }

  const createSearchResultLinks = (data) => {
    return data.map((result, index) => {
      return (
        <Link to={`/stock/${result.symbol}&${result.name}`} key={result.symbol} className="link-stock">
          <div className="stock-link">
            <p className="stock-link-name" key={`${result.symbol}1`}>{result.name}</p>
            <p className="stock-link-symbol" key={`${result.symbol}2`}>{result.symbol}</p>
          </div>
        </Link>
      )
    })
  }

  return (
    <section className="search-container">
      <form className="search-stocks">
        <input 
          className="search-input" 
          type="text"
          placeholder="Search by ticker name (ex. AAPL for Apple)"
          onChange={event => handleFormChange(event)}
          value={query} required>
        </input>
        <div className="exchange-submit-group">
        <select 
          name="exchange" 
          id="exchangeSelect" 
          className="search-exchange"
          value={exchange}
          onChange={event => handleFormChange(event)}
        >
          <option value='' disabled={true}>- Select a Stock Exchange -</option>
          <option className="nyse-option" value="NYSE">NYSE</option>
          <option className="nasdaq-option" value="NASDAQ">NASDAQ</option>
        </select>
        <button className="search-submit" onClick={(event) => getSearchResults(event, query, exchange)}>GO</button>
        </div>
      </form>
      { (searchError && !searchResults) ? <p className="incomplete-form-error">{searchError}</p>:
        <section className="search-results">{searchResults}</section>
      }
      { noResultsError && <p className="no-search-results">{noResultsError}</p> }
    </section>
  )
}

export default Search;