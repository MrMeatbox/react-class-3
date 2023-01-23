import { React, useContext, useState } from "react";
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import { icons } from "../assets";

const TaskCard = ({ task }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTaskAction } = useContext(TaskContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTaskAction({
      type: "UPDATE_TASK",
      payload: { id: task.id, title: taskTitle },
    });
    setEditMode(false);
  };

  const removeHandler = () => {
    dispatchTaskAction({ type: "REMOVE_TASK", payload: task.id });
    dispatchListAction({
      type: "REMOVE_TASK_ID_FROM_LIST",
      payload: { id: task.listId, taskId: task.id },
    });
    dispatchBoardAction({
      type: "REMOVE_TASK_ID_FROM_BOARD",
      payload: { id: task.boardId, taskId: task.id },
    });

    // console.log("Board id: " + task.boardId);
    // console.log("List id: " + task.listId);
    // console.log("Task id: " + task.id);
  };
  return (
    <div>
      {!editMode ? (
        <div onClick={() => setEditMode(true)} className="task-card">
          <p>{task.title}</p>
          <img
            alt=""
            onClick={removeHandler}
            src={icons.crossIcon}
            className="add-item-icon"
          />
        </div>
      ) : (
        <AddItemForm
          title={taskTitle}
          onChangeHandler={(e) => setTaskTitle(e.target.value)}
          setEditMode={setEditMode}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default TaskCard;
