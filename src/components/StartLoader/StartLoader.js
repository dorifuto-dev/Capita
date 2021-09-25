import React from 'react';
import capitaLogo from '../../images/capita-logo.svg'
import Loader from 'react-loader-spinner';
import './StartLoader.scss';

const StartLoader = (props) => {

  return (
    <article className="loader-container">
      <img className="capita-logo" alt="Capita logo" src={capitaLogo}></img>
      <h1 className="capita-title">Capita</h1>
      <Loader className="three-dots" type="ThreeDots" color="#ffffff" height="50" />
    </article>
  );  
}

export default StartLoader;