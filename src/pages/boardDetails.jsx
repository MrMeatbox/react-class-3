import { React, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskContext } from "./../contexts/task";
import { ListContext } from "./../contexts/list";
import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import { BoardContext } from "./../contexts/board";
import TaskList from "../components/TaskList";
import { DragDropContext } from "react-beautiful-dnd";

const BoardDetails = () => {
  const { boardId } = useParams();
  const { lists, dispatchListAction } = useContext(ListContext);
  const { tasks, dispatchTaskAction } = useContext(TaskContext);
  const { boards, dispatchBoardAction } = useContext(BoardContext);
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Date.now() + "";
    dispatchListAction({
      type: "CREATE_LIST",
      payload: { id: id, title: listTitle, boardId: boardId },
    });
    dispatchBoardAction({
      type: "ADD_LIST_ID_TO_BOARD",
      payload: { id: boardId, listId: id },
    });
    setEditMode(false);
    setListTitle("");
    // console.log(lists);
  };

  const onDragHandler = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.draggableId &&
      source.index === destination.index
    ) {
      return;
    }
    if (source.droppableId !== destination.droppableId) {
      dispatchTaskAction({
        type: "CHANGE_LIST_ID_OF_TASK",
        payload: { id: draggableId, listId: destination.droppableId },
      });
    }
    dispatchListAction({
      type: "SORT_TASK_IDS_IN_A_LIST",
      payload: { source, destination, draggableId },
    });
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragHandler}>
      <div className="d-flex m-top-sm flex-direction-row">
        <Link to="/">Back to Boards</Link>
        {lists
          .filter((item) => item.boardId === boardId)
          .map((taskList, index) => (
            <TaskList taskList={taskList} key={taskList.id} index={index} />
          ))}

        {!editMode ? (
          <AddItem listAddItem={true} setEditMode={setEditMode} />
        ) : (
          <AddItemForm
            setEditMode={setEditMode}
            listForm={true}
            submitHandler={submitHandler}
            title={listTitle}
            onChangeHandler={(e) => setListTitle(e.target.value)}
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default BoardDetails;