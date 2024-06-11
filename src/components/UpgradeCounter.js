import { useReducer } from 'react';
import {
  counterInit,
  counterReducer,
  cuonterInitialState,
} from '../reducers/counterReducer';
import { TYPES } from '../actions/counterActions';

const UpgradeCounter = () => {
  const [state, dispatch] = useReducer(
    counterReducer,
    cuonterInitialState,
    counterInit
  );

  const increment = () => dispatch({ type: TYPES.INCREMENT });
  const increment5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const decrement = () => dispatch({ type: TYPES.DECREMENT });
  const decrement5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Upgrade Counter reducer</h2>
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

export default UpgradeCounter;
