import { React, useContext } from "react";
import { icons } from "../assets";
import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "./../contexts/task";

const BoardItem = ({ board }) => {
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);

  const removeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatchBoardAction({ type: "REMOVE_BOARD", payload: board.id });
    const listToRemove = lists.filter((item) => item.boardId === board.id);
    const taskToRemove = tasks.filter((item) => item.boardId === board.id);

    listToRemove.forEach((item) => {
      dispatchListAction({ type: "REMOVE_LIST", payload: item.id });
    });
    taskToRemove.forEach((item) => {
      dispatchTaskAction({ type: "REMOVE_TASK", payload: item.id });
    });
  };
  return (
    <div className="board-box d-flex flex-direction-column">
      <div className="d-flex justify-content-between">
        <h5 className="title-gap">{board.title}</h5>
        <img
          className="add-item-icon"
          alt=""
          onClick={removeHandler}
          src={icons.crossIcon}
        />
      </div>
    </div>
  );
};

export default BoardItem;
