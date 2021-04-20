import React, { useState, useEffect, createContext, useContext } from "react";

const MyContext =  createContext();

const MyComponent = () => {
  const { count, handleClick } = useContext(MyContext)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

const App = () => {
  const [count, updateCount] = useState(0)

  function handleClick() {
    updateCount(count + 1)
  }

  return (
    <MyContext.Provider value={{ count, handleClick }}>
      <div>
        <MyComponent />
      </div>
    </MyContext.Provider>
  )
}

export default App;


// https://mindsers.blog/en/updating-react-context-from-consumer/