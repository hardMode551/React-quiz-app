import React from 'react';
import '../../scss/_Spinner.scss';

const Spinner = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
