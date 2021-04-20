import React, { useState, useEffect, createContext, useContext, useReducer } from "react";
import Flexbox from 'flexbox-react';

import {AxiosGet, AxiosPost} from "../../http/axios";
import Httpget from "./httpget";

import Child1 from "./child1";
import Child2 from "./child2";

import MyContext from "./configContext";
import Clock from "./clock";

const App= ()=> {
  const [data, setData] = useState({ });
  const [seconds, setSeconds] = useState(0);

  useEffect(async () => {
    const data = await AxiosGet();
    setData(data);

    setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    
  }, []);

  return (
    <div>
      {/* <Httpget />
      {Httpget.contextType.id && <p> {Httpget.contextType.id} </p> } */}
      <MyContext.Provider value={{seconds, data}}>
        <Flexbox flexDirection="column">
        <Clock/>
          <Child1 />
          <Child2 />
        </Flexbox>
      </MyContext.Provider>
    </div>
  );
}

export default App;
  

