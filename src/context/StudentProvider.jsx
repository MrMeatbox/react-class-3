import { createContext, React } from "react";
import { useState, useReducer } from "react";
import { studentReducer } from "./../reducers/student";
export const StudentContext = createContext();

const initialState = {
  studentName: "",
  students: [],
  editable: false,
  editableStudent: null,
};

const StudentProvider = ({ children }) => {
  // const [studentName, setStudentName] = useState("");
  // const [students, setStudents] = useState([]);
  // const [editable, setEditable] = useState(false);
  // const [editableStudent, setEditableStudent] = useState(null);

  const [studentStates, dispatch] = useReducer(studentReducer, initialState);
  return (
    <StudentContext.Provider
      value={{
        studentStates,
        dispatch,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
