import React from "react";
import { useState } from "react";
import "./NewBoxForm.css";


/**
 * collects data and passes data to BoxList to create a specific box
 *
 * props:
 * addBox: creates a new box object in BoxList
 *
 * state:
 * - formData
 *
 *
 *
 */
function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** changes the state and its properties */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  /** on submit: sends data to create a box and resets the form */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }


  return (
    <div >
      <form className="NewBoxForm" onSubmit={handleSubmit}>
        <div className="NewBoxForm-input">
          <label htmlFor="height">Height:</label>
          <input
            required
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}>
          </input>
        </div>
        <div className="NewBoxForm-input">
          <label htmlFor="width">Width:</label>
          <input
            required
            type="number"
            id="width"
            name="width"
            onChange={handleChange}
            value={formData.width}>
          </input>
        </div>
        <div className="NewBoxForm-input">
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            required
            id="backgroundColor"
            name="backgroundColor"
            onChange={handleChange}
            value={formData.backgroundColor}>
          </input>
        </div>
        <button className="NewBoxForm-button">Create Box</button>
      </form >
    </div >
  );



}

export default NewBoxForm;
