import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log('Check Action', action);
  switch (action.type) {
    case 'decrement':
      return state - 1;
    case 'increment':
      return state + 1;
    default:
      throw new Error();
  }
}

export default function ExampleReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <p>Hello to Reducer Hook</p>
      Count: {state}
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
