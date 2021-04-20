import React, { useState, useEffect, createContext, useContext } from "react";
import ClockContext from "./configContext";

function Clock() {
  const seconds = useContext(ClockContext);
  return (
    <p>
      {seconds}
    </p>
  );
}

export default Clock;
