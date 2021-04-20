import React, { useState, useEffect, createContext, useContext } from "react";
import MyContext from "./configContext";
import {AxiosGet} from "../../http/axios";
import Clock from "./clock";
import Child1 from "./child1";

function DemoClock () {

  const [seconds, setSeconds] = useState(0);
  const [data, setData] = useState();
    useEffect( async ()   => {
    const getData = async () => {
      let url= "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
      setData(await AxiosGet(url));
    }
    setInterval(() => {
      setSeconds(seconds => seconds + 1);
      getData();
    }, 1000);
  }, []);

  console.log(seconds);
  console.log(data);

  return (
    <MyContext.Provider value={ {seconds, data} }>
      <Clock />
      <Child1 />

    </MyContext.Provider>
  );
}

export default DemoClock;
