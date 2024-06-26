import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from 'reduxExample/types';

export const add5 = () => ({ type: INCREMENT_5, payload: 5 });
export const add = () => ({ type: INCREMENT });
export const subtract = () => ({ type: DECREMENT });
export const subtract5 = () => ({ type: DECREMENT_5, payload: 5 });
export const reset = () => ({ type: RESET });
