import React from "react";
import { icons } from "../assets";

const AddItemForm = ({
  listForm,
  submitHandler,
  title,
  onChangeHandler,
  setEditMode,
}) => {
  const createHandler = (e) => {
    e.stopPropagation();
    if (!title) {
      alert("Insert a valid information");
    }
    submitHandler(e);
  };
  return (
    <div className="form-container">
      <div className="form-card">
        <form>
          <textarea
            className="form-textarea"
            cols="30"
            rows="2"
            name=""
            id=""
            value={title}
            onChange={onChangeHandler}
          ></textarea>
        </form>
      </div>
      <div className="button-container">
        <button className="add-button" onClick={createHandler}>
          {listForm ? "Add list" : "Add task"}
        </button>
        <img
          src={icons.crossIcon}
          alt=""
          onClick={(e) => {
            setEditMode(false);
            e.stopPropagation();
          }}
          className="form-icon"
        />
      </div>
    </div>
  );
};

export default AddItemForm;
