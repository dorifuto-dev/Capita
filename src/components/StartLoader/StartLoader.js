import React from 'react';
import capitaLogo from '../../images/capita-logo.svg'
import './StartLoader.scss';

const StartLoader = (props) => {

  return (
    <article className="loader-container">
      <img className="capita-logo" alt="Capita logo" src={capitaLogo}></img>
      <h1 className="capita-title">Capita</h1>
    </article>
  );  
}

export default StartLoader;