import React from 'react';
import Button from 'react-bootstrap/Button';
const Counter = ({ value, minValue, onChange }) => {
  return (
    <div>
      <Button size="sm" onClick={() => value - minValue > 0 ? onChange(value - minValue) : onChange(0)}>-</Button>
      <label type="text" className="number" style={{ width: '30px' }}>{value}</label>
      <Button size="sm" onClick={() => onChange(value + minValue)}>+</Button>
    </div>
  );
}
export default Counter;