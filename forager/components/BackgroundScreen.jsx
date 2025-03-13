'use client';

import React from 'react';
import './BackgroundScreen.css';

const BackgroundScreen = ({ imageUrl, children }) => {
  return (
    <div className="background-screen" role="region" aria-label="Background Screen">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundScreen;