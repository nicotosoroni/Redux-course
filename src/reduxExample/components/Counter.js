import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  add5,
  reset,
  subtract,
  subtract5,
} from 'reduxExample/actions/counterActions';
import './Counter.css';

function Counter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>

      <div className="buttons">
        <button onClick={() => dispatch(add5())}>+5</button>
        <button onClick={() => dispatch(add())}>+1</button>
        {
          // @ts-ignore
          state.counter
        }
        <button onClick={() => dispatch(subtract())}>-1</button>
        <button onClick={() => dispatch(subtract5())}>-5</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
