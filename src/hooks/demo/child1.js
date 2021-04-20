import React, { useState, useEffect, createContext, useContext, useReducer } from "react";

import Httpget from "./httpget";

const initialState = {
  a: 1,
};

const handleReducer = (state, action) => {
  return { 
    ...state, //previous state
    b: state.a + action.x   // new item
  };
};


function Child1() {

  const [text, setText] = useState("");  // updateText is also okey
  const [state, dispatch] = useReducer(handleReducer, initialState);

  useEffect(() => {
    console.log(text);

  });

  const handleClick = ()=>{
    console.log(text);
    dispatch({ x: text });
    Httpget.contextType.id = "000000";
  }

  return (
    <div>
      {/* <div>
        id: {id}
      </div>  */}

      <hr/>

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

      <hr/>

      <div>
        a: {state.a}
        <br/>
        b: {state.b}
      </div> 


    </div> 
  )

}




export default Child1;