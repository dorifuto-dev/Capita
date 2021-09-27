import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';

const Search = ({ stocks }) => {
  const [query, setQuery] = useState('')
  const [exchange, setExchange] = useState('')

  const handleFormChange = (event) => {
    event.preventDefault()
    if (event.target.id === "exchangeSelect") {
      setExchange(event.target.value)
    } else {
      setQuery(event.target.value)
    }
  }

  return (
    <form className="search-stocks" onChange={(event) => handleFormChange(event)}>
      <input 
        className="search-input" 
        type="text"
        placeholder="Search by company or ticker name (ex. AAPL or Apple)"
        onChange={event => handleFormChange(event)}
        value={query} required>
      </input>
      <div>
      <select name="exchange" id="exchangeSelect" className="search-exchange">
        <option value='' disabled={true}>- Select a Stock Exchange -</option>
        <option value="NYSE">NYSE</option>
        <option value="NASDAQ">NASDAQ</option>
      </select>
      <button className="search-submit">GO</button>
      </div>
    </form>
  )
}

export default Search;

{/* <Link to={`/stock/${query.toUpperCase()}`}> */}