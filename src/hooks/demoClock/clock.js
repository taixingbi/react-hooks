import React, { useState, useEffect, createContext, useContext } from "react";
import MyContext from "./configContext";

function Child1() {
  const {seconds} = useContext(MyContext);
  return (
    <p>
      {seconds}s
    </p>
  );
}

export default Child1;
