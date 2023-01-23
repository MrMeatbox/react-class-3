import { createContext, useReducer } from "react";
import { listReduder } from "../reducers/list";
export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [lists, dispatchListAction] = useReducer(listReduder, []);
  return (
    <ListContext.Provider value={{ lists, dispatchListAction }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
