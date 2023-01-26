import { React, useContext, useState } from "react";
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import { icons } from "../assets";
import { Droppable } from "react-beautiful-dnd";

import { BoardContext } from "../contexts/board";
import { ListContext } from "../contexts/list";
import { TaskContext } from "../contexts/task";
import TaskCard from "./TaskCard";
import DropDown from "./dropDown";

const TaskList = ({ taskList, index }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [showOption, setShowOption] = useState(false);

  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now() + "";

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

  const showDropDown = () => {
    setDropDown(true);
    setShowOption(false);
  };
  const hideDropDown = () => {
    setDropDown(false);
    setShowOption(false);
  };
  return (
    <Droppable droppableId={taskList.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div className="list-container">
            <div className="list-title-container">
              <h5>{taskList.title}</h5>
              {/* <img
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
                src={icons.threeBar}
                alt=""
                className="add-item-icon"
              >
                {dropDown ? <DropDown /> : null}
              </img> */}
              <div
                // className="add-item-icon"
                onMouseEnter={showDropDown}
                // onMouseLeave={hideDropDown}
              >
                <img
                  className="add-item-icon"
                  alt=""
                  src={icons.crossIcon}
                  onClick={hideDropDown}
                />
                {showOption ? (
                  <img className="add-item-icon" src={icons.threeBar} />
                ) : null}
                {dropDown ? (
                  <DropDown
                    list={true}
                    boardId={taskList.boardId}
                    listId={taskList.id}
                  />
                ) : null}
              </div>
            </div>
            {taskList.tasks
              .map((item) => {
                return allTasks.find((i) => i.id === item);
              })
              .map((task, index) => (
                <TaskCard index={index} task={task} key={task.id} />
              ))}
            {/* {provided.placeholder} */}
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
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
