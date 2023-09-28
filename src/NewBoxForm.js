import React from "react";
import { useState } from "react";
import "./NewBoxForm.css";

function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

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
