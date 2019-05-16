import React, { useState, useEffect } from "react";


const login= ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("useState:"+password);
  }, []);

  const handleClick = ()=>{
  

    //  alert("password: "+password);
    //  alert("email: "+email);
  }

  const Form =() =>{
    return (
    <form>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button  onClick={()=>handleClick} > Submit </button>
    </form>
    )
  }

  const Print =() =>{
    return (
      <div>
        <div>
        {"email: " + email}
        </div>
        <div>
        {"password: " + password}
        </div>
      </div>  
    )
  }

  const Count =() =>{
    return (
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div> 
    )
  }

  return (
    <div>
      {Form()}
      {Print()}
      {Count()}

    </div>
  );
}
export default login;