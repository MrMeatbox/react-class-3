import { React, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TodoDetails = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const idk = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${idk.todoId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setisLoading(false);
      });
  }, []);
  return (
    <center>
      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <h1>ID: {detail?.id}</h1>
          </div>
          <div>
            <h1>Title: {detail?.title}</h1>
          </div>
          <button>
            <Link to="/home">Back to home</Link>
          </button>
        </>
      )}
    </center>
  );
};

export default TodoDetails;
