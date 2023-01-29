import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Theme = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-color">
        <p>Change theme color:</p>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_BG_COLOR", payload: "#00FF00" })
          }
        >
          Green
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_BG_COLOR", payload: "#FF0000" })
          }
        >
          Red
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_BG_COLOR", payload: "#0000FF" })
          }
        >
          Blue
        </button>
      </div>
      <div className="text-color">
        <p>Change theme color:</p>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_COLOR", payload: "#00FF00" })
          }
        >
          Green
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_COLOR", payload: "#FF0000" })
          }
        >
          Red
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CHANGE_TEXT_COLOR", payload: "#0000FF" })
          }
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default Theme;
