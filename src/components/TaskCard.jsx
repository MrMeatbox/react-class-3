import { React, useContext, useState } from "react";
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import { icons } from "../assets";
import { Draggable } from "react-beautiful-dnd";
import DropDown from "./dropDown";

const TaskCard = ({ task, index }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTaskAction } = useContext(TaskContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardAction } = useContext(BoardContext);
  const [dropDown, setDropDown] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTaskAction({
      type: "UPDATE_TASK",
      payload: { id: task.id, title: taskTitle },
    });
    setEditMode(false);
  };
  const showDropDown = () => {
    setDropDown(true);
    setShowOption(false);
  };
  const hideDropDown = (e) => {
    e.stopPropagation();
    setDropDown(false);
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    dispatchTaskAction({ type: "REMOVE_TASK", payload: task.id });
    dispatchListAction({
      type: "REMOVE_TASK_ID_FROM_LIST",
      payload: { id: task.listId, taskId: task.id },
    });
    dispatchBoardAction({
      type: "REMOVE_TASK_ID_FROM_BOARD",
      payload: { id: task.boardId, taskId: task.id },
    });
    console.log(task);
    // console.log("List id: " + task.listId);
    // console.log("Task id: " + task.id);
  };
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {!editMode ? (
            <div className="task-card">
              <p>{task.title}</p>
              <div
                // className="add-item-icon"
                onMouseEnter={showDropDown}
                // onMouseLeave={hideDropDown}
              >
                <img
                  className="add-item-icon"
                  alt=""
                  src={icons.threeBar}
                  onClick={hideDropDown}
                />
                {showOption ? (
                  <img className="add-item-icon" src={icons.crossIcon} />
                ) : null}
                {dropDown ? (
                  <DropDown
                    list={false}
                    boardId={task.boardId}
                    listId={task.listId}
                    taskId={task.id}
                    setEditMode={setEditMode}
                    taskTitle={taskTitle}
                  />
                ) : null}
              </div>
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
      )}
    </Draggable>
  );
};

export default TaskCard;
