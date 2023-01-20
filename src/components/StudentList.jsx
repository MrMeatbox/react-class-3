import { React, useContext } from "react";
import { StudentContext } from "./../context/StudentProvider";

const StudentList = () => {
  const { studentStates, dispatch } = useContext(StudentContext);
  const removeHandler = (id) => {
    dispatch({ type: "remove_student", payload: id });
  };
  const presentHandler = (id) => {
    dispatch({ type: "present_handler", payload: id });
  };
  const absentHandler = (id) => {
    dispatch({ type: "absent_handler", payload: id });
  };
  const editHandler = (id) => {
    dispatch({ type: "edit_handler", payload: id });
  };
  return (
    <div className="list all-student-list">
      <h1>All students</h1>
      <ul>
        {studentStates.students.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeHandler(item.id)}>Delete</button>
            <button
              onClick={() => {
                editHandler(item.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => presentHandler(item.id)}>
              Make present
            </button>
            <button onClick={() => absentHandler(item.id)}>Make absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
