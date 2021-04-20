import React, { useState, useEffect, createContext, useContext, useReducer } from "react";

const TimerContext = createContext();

window.seconds= 0;

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }, []);

  console.log(seconds);
  TimerContext.seconds = seconds;

  return (
    <div >
      {seconds}s
      {window.seconds}ss

    </div>
  );
};

Timer.contextType = TimerContext;


export default Timer;
// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
