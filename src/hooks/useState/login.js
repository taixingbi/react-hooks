import React, { useState, useEffect } from "react";


const login= ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // alert("useState:"+password);
  }, []);

  const handleClick = ()=>{
     alert("password: "+password);
     alert("email: "+email);
  }

  const Form =() =>{
    return (
      <div>

        <form>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            // type="email"
            name="email"
            // required
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            // type="password"
            name="password"
            // required
          />
          <button  onClick={()=>handleClick()} > Submit </button>
        </form>

        <div>
          {email}
          <br/>
          {password}
        </div>  

    </div>  

    )
  }

  return (
    <div>
      {Form()}
    </div>
  );
}

export default login;