import React, { useState, useEffect, createContext, useContext, useReducer } from "react";

import Httpget from "./httpget";
import Timer from "./timer";
import Page from "./index";

import MyContext from "./context";

function Child2() {
  // const seconds = useContext(MyContext);

  return (
    <div>
      <p>Child2 </p>    
      {Httpget.contextType.id && <p> {Httpget.contextType.id} </p> }
      <p> {Timer.contextType.seconds}ss </p> 
      <p> {window.seconds}sss </p> 
      {/* {seconds}s */}
    </div> 
  )

}




export default Child2;