import React, { useReducer } from "react";

const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Reducer2 = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };
  
  return (
    <div>
      <p>count: {state.count}</p>
      <div>
        <button type="button" onClick={handleIncrease} >
          +
        </button>
        <button type="button" onClick={handleDecrease} >
          -
        </button>
      </div>
    </div>
  );
}

export default Reducer2;


