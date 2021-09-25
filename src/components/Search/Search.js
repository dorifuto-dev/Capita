import React, { useState, useEffect } from 'react';
import './Search.scss';

const Search = ({stocks}) => {
  const [query, setQuery] = useState('')

  return (
    <form className="search-stocks">
      <input className="search-input" type="text"></input>
      
    </form>
  )
}

export default Search;