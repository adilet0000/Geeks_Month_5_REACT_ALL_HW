import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from '../../reducer';

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>COUNTER: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())} disabled={count === 0}>-1</button>
        <button onClick={() => dispatch(incrementByTen())}>+10</button>
        <button onClick={() => dispatch(decrementByTen())} disabled={count < 10}>-10</button>
        <button onClick={() => dispatch(reset())}>RESET THE COUNTER</button>
      </div>
    </div>
  );
};

export default Counter;
