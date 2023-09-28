import React from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"
import { useState } from "react";
import { v4 as uuid } from "uuid";

/**
 * Renders the form and and boxes created with it
 *
 * props:
 * none
 *
 * state:
 * - boxes: array of box objects
 *
 * App -> BoxList -> NewBoxForm/Box
 *
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** adds a box object to our boxes state */
  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** removes a box object with the passed in id*/
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => {
      return box.id !== id;
    }));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(box =>
        <Box {...box} key={box.id} removeBox={removeBox} />)}
    </div>
  );
}

export default BoxList;
