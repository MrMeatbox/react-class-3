import { createContext, useReducer } from "react";
import { taskReduder } from "../reducers/task";
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, dispatchTaskAction] = useReducer(taskReduder, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatchTaskAction }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
