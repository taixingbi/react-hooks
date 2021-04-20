import React, { createContext } from "react";

export const gobal_data= {
  init: "",
  id: "000",
  name: "hunter",
}


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};


const MyContext = createContext(themes.light);

export default 
{
  gobal_data, 
  MyContext,
}