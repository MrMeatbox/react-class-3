import { React, useContext, useState } from "react";
import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import { icons } from "../assets";
import Copy from "./Copy";
import Move from "./Move";

const DropDown = ({ list, boardId, listId, taskId, taskTitle }) => {
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { dispatchTaskAction } = useContext(TaskContext);
  const [showMove, setShowMove] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const removeListHandler = (e) => {
    e.stopPropagation();
    // dispatchListAction({ type: "REMOVE_LIST", payload: taskList.id });
    dispatchBoardAction({
      type: "REMOVE_LIST_ID_FROM_BOARD",
      payload: { id: { boardId }, listId: { listId } },
    });
    dispatchListAction({
      type: "REMOVE_LIST",
      payload: listId,
    });
    // console.log("B id:" + boardId);
    // console.log("L id:" + listId);
  };
  const removeTaskHandler = (e) => {
    e.stopPropagation();
    dispatchTaskAction({ type: "REMOVE_TASK", payload: taskId });
    dispatchListAction({
      type: "REMOVE_TASK_ID_FROM_LIST",
      payload: { id: listId, taskId: taskId },
    });
    dispatchBoardAction({
      type: "REMOVE_TASK_ID_FROM_BOARD",
      payload: { id: boardId, taskId: taskId },
    });
    // console.log(task);
    // console.log("List id: " + task.listId);
    // console.log("Task id: " + task.id);
  };

  const showMoveHandler = () => {
    setShowMove(true);
  };
  const showCopyHandler = () => {
    setShowCopy(false);
  };
  return (
    <div className="dropDown">
      <ul style={{ listStyle: "none" }}>
        <li
          className="listItem"
          onClick={list ? removeListHandler : removeTaskHandler}
        >
          Delete
        </li>
        <li
          className="listItem"
          onMouseEnter={showMoveHandler}
          // onMouseLeave={hideMoveHandler}
          // onMouseLeave={hideMoveHandler}
        >
          {showMove ? (
            <Move
              list={list}
              boardId={boardId}
              taskId={taskId}
              listId={listId}
            />
          ) : (
            "Move"
          )}
        </li>
        {!list ? (
          <li
            onMouseEnter={showCopyHandler}
            onMouseLeave={() => setShowCopy(false)}
            className="listItem"
          >
            <Copy
              list={list}
              boardId={boardId}
              taskId={taskId}
              listId={listId}
              taskTitle={taskTitle}
            />
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default DropDown;
