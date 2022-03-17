import React from 'react';

const Input = ({
  type = 'text',
  label = '',
  name,
  value,
  placeholder = '',
  className = 'input',
  onChange= () => {},
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name= {name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </>
   )
}

export default Input;
