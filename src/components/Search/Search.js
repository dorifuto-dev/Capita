import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';

const Search = ({ stocks }) => {
  const [query, setQuery] = useState('')

  const handleFormChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  return (
    <form className="search-stocks">
      <input 
        className="search-input" 
        type="text"
        placeholder="Search by stock or ticker name (ex. Apple or AAPL)"
        onChange={event => handleFormChange(event)}
        value={query} required>
      </input>
      <Link to={`/stock/${query.toUpperCase()}`}>
        <button className="search-submit">GO</button>
      </Link>
    </form>
  )
}

export default Search;