import React from 'react';

const Button = ({ value, onChange }) => {

  return (
    <button onClick={(_e) => onChange(value+1)} style={{ width: 200 }} />
  )
}

export default Button;