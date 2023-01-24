import { React, useContext, useState } from "react";
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import { icons } from "../assets";

import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import TaskCard from "./TaskCard";

const TaskList = ({ taskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now();

    dispatchTaskAction({
      type: "CREATE_TASK",
      payload: {
        id: id,
        title: taskTitle,
        boardId: taskList.boardId,
        listId: taskList.id,
      },
    });

    dispatchListAction({
      type: "ADD_TASK_ID_TO_LIST",
      payload: { id: taskList.id, taskId: id },
    });

    dispatchBoardAction({
      type: "ADD_TASK_ID_TO_BOARD",
      payload: { id: taskList.boardId, taskId: id },
    });
    setEditMode(false);
    setTaskTitle("");
    console.log(taskList.tasks);
  };

  const removeListHandler = (e) => {
    e.stopPropagation();
    // dispatchListAction({ type: "REMOVE_LIST", payload: taskList.id });
    dispatchBoardAction({
      type: "REMOVE_LIST_ID_FROM_BOARD",
      payload: { id: taskTitle.boardId, listId: taskTitle.id },
    });
    dispatchListAction({
      type: "REMOVE_LIST",
      payload: taskList.id,
    });
    console.log(allTasks);
  };
  return (
    <div className="list-container">
      <div className="list-title-container">
        <h5>{taskList.title}</h5>
        <img
          onClick={removeListHandler}
          src={icons.crossIcon}
          alt=""
          className="add-item-icon"
        />
      </div>
      {taskList.tasks
        .map((item) => {
          return allTasks.find((i) => i.id === item);
        })
        .map((task, index) => (
          <TaskCard task={task} key={task.id} />
        ))}
      {/* {console.log({ taskList })} */}
      {!editMode ? (
        <AddItem setEditMode={setEditMode} />
      ) : (
        <AddItemForm
          title={taskTitle}
          listForm={false}
          setEditMode={setEditMode}
          submitHandler={submitHandler}
          onChangeHandler={(e) => setTaskTitle(e.target.value)}
        />
      )}
    </div>
  );
};

export default TaskList;
