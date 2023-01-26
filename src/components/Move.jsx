import { React, useContext, useState } from "react";

import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import { useParams } from "react-router-dom";
const Move = ({ list, boardId, listId, taskId }) => {
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);
  const id = useParams();

  const [value, setValue] = useState([]);
  const [valueId, setValueId] = useState([]);
  const [boardVal, setBoardVal] = useState([]);
  const moveListHandler = (e) => {
    e.preventDefault();
    console.log(valueId);

    if (!valueId) {
      alert("Pease select a board");
    } else if (boardId === valueId) {
      alert("Can't Move to same board");
    } else {
      dispatchBoardAction({
        type: "ADD_LIST_ID_TO_BOARD",
        payload: { id: valueId, listId: listId },
      });
      dispatchBoardAction({
        type: "REMOVE_LIST_ID_FROM_BOARD",
        payload: { id: boardId, listId: listId },
      });
      dispatchListAction({
        type: "CHANGE_BOARD_OF_LIST",
        payload: { id: listId, boardId: valueId },
      });
    }

    console.log(boardId);
    console.log(listId);
  };

  const moveTaskHandler = (e) => {
    e.preventDefault();
    if (!valueId) {
      alert("Pease select a board");
    } else if (listId === valueId) {
      alert("Can't Move to same board");
    } else {
      dispatchBoardAction({
        type: "ADD_TASK_ID_TO_BOARD",
        payload: { id: boardVal, taskId: taskId },
      });
      dispatchBoardAction({
        type: "REMOVE_TASK_ID_FROM_BOARD",
        payload: { id: boardId, taskId: taskId },
      });
      dispatchListAction({
        type: "ADD_TASK_ID_TO_LIST",
        payload: { id: valueId, taskId: taskId },
      });
      dispatchListAction({
        type: "REMOVE_TASK_ID_FROM_LIST",
        payload: { id: listId, taskId: taskId },
      });
      dispatchTaskAction({
        type: "CHANGE_LIST_ID_OF_TASK",
        payload: { id: taskId, listId: valueId },
      });
    }
    console.log("new L" + valueId);
    console.log("Old L" + listId);
    console.log("Boardval" + boardVal);
    console.log("value" + valueId);
  };
  return (
    <div className="move">
      {list ? "Select a board" : "Select a List"}
      <form onSubmit={list ? moveListHandler : moveTaskHandler}>
        {!list ? (
          <select onChange={(e) => setBoardVal(e.target.value)}>
            <option>Select a board</option>

            {boards.map((i) => (
              <option
                value={i.id}
                onChange={(e) => moveTaskHandler(e)}
                key={i.id}
              >
                {i.title}
              </option>
            ))}
          </select>
        ) : null}
        <select onChange={(e) => setValueId(e.target.value)}>
          <option>Select an option</option>

          {list
            ? boards.map((i) => (
                <option
                  value={i.id}
                  onChange={(e) => moveTaskHandler(e)}
                  key={i.id}
                >
                  {i.title}
                </option>
              ))
            : lists
                .filter((item) => item.boardId === boardVal)
                .map((i) => (
                  <option value={i.id} key={i.id}>
                    {i.title}
                  </option>
                ))}
        </select>

        <button type="submit">{list ? "Move list" : "Move Task"}</button>
      </form>
    </div>
  );
};

export default Move;
