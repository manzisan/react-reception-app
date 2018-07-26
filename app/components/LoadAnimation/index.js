import React, { Component } from 'react';
import './index.css';

function LoadAnimation({...rest}) {
  return (
    <div id="loader" className="loader">
      <div className="loader-animation"></div>
    </div>
  )
}

export default LoadAnimation;