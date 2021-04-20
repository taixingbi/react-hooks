import React, { useState, useEffect, createContext, useContext } from "react";

const GreetingContext = createContext({
  init: "",
});

const Hooks= ()=> {
  const {init} = useContext(GreetingContext);
  const [text, setText] = useState(init);  // updateText is also okey

  useEffect(() => {
    console.log(text)
  });

  const handleClick = ()=>{
     alert(text);
  }

  return (
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
  )

}

export default Hooks;