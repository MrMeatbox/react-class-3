import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <center>
        <h1>Hello world</h1>
        <Link to="/about">To about page</Link>
        <br />
        <Link to="/">To main page</Link>
        <h1>Todo List</h1>
        {isLoading && <h2>Loading...</h2>}
        {todos.map((item) => (
          <li key={item.id}>
            <Link to={`/todo_detail/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </center>
    </div>
  );
};

export default Home;
