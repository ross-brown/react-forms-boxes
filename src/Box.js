import React from "react";
import "./Box.css";


/** */

function Box({ height, width, backgroundColor, removeBox, id }) {



  return (
    <div>
      <div className="Box" style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor
      }}></div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
