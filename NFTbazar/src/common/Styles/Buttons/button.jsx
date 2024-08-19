import React from 'react';
import './button.css';

function Button(props) {
  const { btnType, btnText, btnOnclick, customClass } = props;

  return (
    <div
      className={`button ${btnType === "PRIMARY" ? `primary-btn ${customClass}` : `sec-btn ${customClass}`}`}
      onClick={btnOnclick}
    >
      {btnText}
    </div>
  );
}

export default Button;
