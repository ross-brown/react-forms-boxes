import React from "react";
import "./Box.css";


/**
 * creates a box with the properties passed in as props
 *
 * props:
 * -height
 * -width
 * -backgroundColor
 * -removeBox
 * -id
 *
 * state:
 * - none
 *
 *
 *
 */

function Box({ height, width, backgroundColor, removeBox, id }) {

  const style = {height: `${height}px`,
        width: `${width}px`,
        backgroundColor}

  function handleRemove(){
    removeBox(id);
  }

  return (
    <div>
      <div className="Box" style={style}></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
