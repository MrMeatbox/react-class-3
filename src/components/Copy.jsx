import { React, useContext, useState } from "react";

import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import { useParams } from "react-router-dom";
const Copy = ({ list, boardId, listId, taskId, taskTitle }) => {
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);
  const id = useParams();

  const [value, setValue] = useState([]);
  const [valueId, setValueId] = useState([]);
  const [boardVal, setBoardVal] = useState([]);

  const copyTaskHandler = (e) => {
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
      dispatchListAction({
        type: "ADD_TASK_ID_TO_LIST",
        payload: { id: valueId, taskId: taskId },
      });
      const id = Date.now() + "";
      dispatchTaskAction({
        type: "CREATE_TASK",
        payload: {
          id: id,
          listId: valueId,
          boardId: boardVal,
          title: taskTitle,
        },
      });
    }
    // console.log("new L" + valueId);
    // console.log("Old L" + listId);
    // console.log("Boardval" + boardVal);
    // console.log("value" + valueId);
  };
  return (
    <div className="move">
      {list ? "Select a board" : "Select to Copy"}
      <form onSubmit={copyTaskHandler}>
        {!list ? (
          <select onChange={(e) => setBoardVal(e.target.value)}>
            <option>Select a board</option>

            {boards.map((i) => (
              <option
                value={i.id}
                onChange={(e) => copyTaskHandler(e)}
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
                  onChange={(e) => copyTaskHandler(e)}
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

        <button type="submit">Copy task</button>
      </form>
    </div>
  );
};

export default Copy;
