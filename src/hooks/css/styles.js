import React, { useState } from "react";
import styles from "../../public/style.js";

function Button() {
  const [bgColour, setBgColour] = useState();

  return (
    <div>
      <button
        style={styles.button_(bgColour)}
        onMouseEnter={ () => setBgColour("onMouseEnter") } 
        onMouseLeave={ () => setBgColour("onMouseLeave")}
      >
        Click
      </button>

      <button
        style={styles.button}             
        onMouseEnter={styles.button.onMouseEnter} 
        onMouseLeave={styles.button.onMouseLeave} 
      >
        Click
      </button>

    </div>
  );
}

export default Button;