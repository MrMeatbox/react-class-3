import { createContext, React } from "react";
import { useState } from "react";
export const StudentContext = createContext();
const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <StudentContext.Provider
      value={{
        studentName,
        setStudentName,
        students,
        setStudents,
        editable,
        setEditable,
        editableStudent,
        setEditableStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
