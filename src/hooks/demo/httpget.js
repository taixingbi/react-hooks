import React, { useState, useEffect, createContext, useContext, useReducer } from "react";

import {AxiosGet, AxiosPost} from "../../http/axios";
import {sleep} from "../../utils/utils";

const MyContext = createContext();

const Httpget= ()=> {
  const [data, setData] = useState({ });
 
  useEffect(async () => {
    const data = await AxiosGet();
    sleep(1000);

    setData(data);
    MyContext.id = data.id;
    MyContext.data = data;
  }, {});

  return (
    <div>
      {data.id}
    </div>

  );
}

Httpget.contextType = MyContext;


export default Httpget;
  

