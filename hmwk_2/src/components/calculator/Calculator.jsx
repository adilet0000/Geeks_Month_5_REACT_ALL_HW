import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide } from '../../redux/actions';

const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  const handleAdd = () => dispatch(add(Number(num1), Number(num2)));
  const handleSubtract = () => dispatch(subtract(Number(num1), Number(num2)));
  const handleMultiply = () => dispatch(multiply(Number(num1), Number(num2)));
  const handleDivide = () => dispatch(divide(Number(num1), Number(num2)));

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;
