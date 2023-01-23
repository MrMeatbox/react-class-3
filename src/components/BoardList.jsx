import { React, useContext } from "react";
import { BoardContext } from "../contexts/board";
import BoardItem from "./BoardItem";
import { Link } from "react-router-dom";

const BoardList = () => {
  const { boards } = useContext(BoardContext);
  return (
    <div className="flex-wrap m-top-md d-flex justify-content-around">
      {boards.map((item) => (
        <Link key={item.id} to={`/boards/${item.id}`}>
          <BoardItem board={item} />
        </Link>
      ))}
    </div>
  );
};

export default BoardList;
