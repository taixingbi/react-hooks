import React, { useState, useEffect } from "react";

const hooks= ()=> {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> 
  )

}

export default hooks;