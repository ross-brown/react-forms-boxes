import React from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css"
import { useState } from "react";
import { v4 as uuid } from "uuid";

/** */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

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
