import React, { useState, useEffect, createContext, useContext } from "react";
import MyContext from "./configContext";

function Child1() {
  const {data} = useContext(MyContext);

  let render = <div> loading.</div>

  if(data && data.active !== true){
    render = <div> check...</div>;
  }

  if(data && data.active === true){
    render = (
        <div>
          <p> 
            {data.homeTown} 
          </p> 
        </div>
      )
    }  

  return render;
}

  // if(data){
  //   return (
  //     <div>
  //       <p> 
  //         {data.homeTown} 
  //       </p> 
  //     </div>
  //   );
  // }

  // return <div> loading.</div>;


export default Child1;
