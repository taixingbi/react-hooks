import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'


import React, { useState, useEffect, createContext, useContext } from "react";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/decremented' })

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})







const GreetingContext = createContext({
  init: "",
});

const Hooks= ()=> {
  const {init} = useContext(GreetingContext);
  const [text, setText] = useState(init);  // updateText is also okey

  useEffect(() => {
    console.log(text)
  });

  const handleClick = ()=>{
     alert(text);
  }

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={() => handleClick()}>
        Click 
      </button>

      <p>{text} </p>
    </div> 
  )

}

export default Hooks;


// https://redux.js.org/introduction/getting-started