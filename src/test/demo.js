import React, { useState, useEffect, createContext, useContext } from "react";
import ClockContext from "./configContext";
import Clock from "./clock";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }, []);

  return (
    <ClockContext.Provider value={seconds}>
      <Clock />
    </ClockContext.Provider>
  );
}

export default App;
