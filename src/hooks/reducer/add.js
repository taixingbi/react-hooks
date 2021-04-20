import React, { useReducer } from "react";

const initialState = {
  x: 1,
};

const handleReducer = (state, action) => {
  return { 
    ...state, //previous state
    sum: state.x + action.z   // new item
  };
};

const App = () => {
  const [state, dispatch] = useReducer(handleReducer, initialState);

  const handleClick = () => {
    dispatch({ z: 2 });
  };

  return (
    <div>
      <p>x: {state.x}</p>
      <p>sum: {state.sum}</p>

      <div>
        <button type="button" onClick={handleClick} >
          click me
        </button>

      </div>
    </div>
  );
}

export default App;


