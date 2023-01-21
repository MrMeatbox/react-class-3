import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import Home from "../pages/home";
import TodoDetails from "../pages/todoDetails";
import StudentProvider from "../context/StudentProvider";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo_detail/:todoId" element={<TodoDetails />} />
      <Route
        path="/"
        element={
          <StudentProvider>
            <App />
          </StudentProvider>
        }
      />
    </>
  )
);
