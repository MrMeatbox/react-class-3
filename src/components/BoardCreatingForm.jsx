import { React, useState, useContext } from "react";
import { BoardContext } from "./../contexts/board";

const BoardCreatingForm = () => {
  const { dispatchBoardAction } = useContext(BoardContext);
  const [boardTitle, setBoardTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!boardTitle) {
      alert("Please enter a valid name");
    }
    dispatchBoardAction({ type: "CREATE_BOARD", payload: boardTitle });
  };
  return (
    <div className="align-center m-top-md">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <button type="submit">Add board</button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
