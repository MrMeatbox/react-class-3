import React from "react";
import BoardList from "../components/BoardList";
import BoardCreatingForm from "./../components/BoardCreatingForm";

const Boards = () => {
  return (
    <>
      <BoardCreatingForm />
      <BoardList />
    </>
  );
};

export default Boards;
