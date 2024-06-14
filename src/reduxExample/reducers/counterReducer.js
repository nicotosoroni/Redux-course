const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state + 1);
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT_5':
      return state + action.payload;
    case 'DECREMENT_5':
      return state - action.payload;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
