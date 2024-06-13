import React, { useReducer } from 'react';

const TYPES = {
  INCREMENT: 'INCREMENT',
  INCREMENT_5: 'INCREMENT_5',
  DECREMENT: 'DECREMENT',
  DECREMENT_5: 'DECREMENT_5',
  RESET: 'RESET',
};

const initialState = { count: 0 };

const init = (initialState) => {
  return { count: initialState.count + 100 };
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const increment = () => dispatch({ type: TYPES.INCREMENT });
  const increment5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const decrement = () => dispatch({ type: TYPES.DECREMENT });
  const decrement5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter reducer</h2>
      <nav>
        <button onClick={decrement5}>-5</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={increment5}>+5</button>
      </nav>
      <nav>
        <button onClick={reset}>Reset</button>
      </nav>
      <h3>{state.count}?</h3>
    </div>
  );
};

export default Counter;
