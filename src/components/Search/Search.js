import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';

const Search = ({stocks}) => {
  const [query, setQuery] = useState('')

  return (
    <form className="search-stocks">
      <input className="search-input" type="text" value={query} placeholder="Search by stock or ticker name (ex. Apple or AAPL)"></input>
      <Link to={`/${query}`}>
        <button className="search-submit">GO</button>
      </Link>
    </form>
  )
}

export default Search;