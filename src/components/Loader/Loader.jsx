// Loader.js

import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

export const Loader = () => (
  <div className="loader">
    <LoaderSpinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
  </div>
);

