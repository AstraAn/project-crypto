import React from 'react';

const Button = ({
    children,
    type = 'button',
    className = 'btn',
    disabled = false,
    onClick= () => {},
}) => {
  return (
    <button
        type={type}
        disabled= {disabled}
        onClick={onClick}
        className={className}
    >
    {children}
    </button>
   )
}

export default Button;
