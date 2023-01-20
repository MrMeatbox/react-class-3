import { React, useContext } from "react";
import { StudentContext } from "./../context/StudentProvider";

const StudentList = () => {
  const {
    students,
    setStudents,
    setEditable,
    setEditableStudent,
    setStudentName,
  } = useContext(StudentContext);
  const removeHandler = (id) => {
    const afterRemoved = students.filter((item) => item.id !== id);

    setStudents(afterRemoved);
  };
  const presentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = true;
        } else if (item.isPresent === true) {
          alert("Student already present");
        } else if (item.isPresent === false) {
          alert("Please use accidentally added button");
        }
      }
      return item;
    });
    setStudents(newList);
  };
  const absentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = false;
        } else if (item.isPresent === false) {
          alert("Student already is absent list");
        } else if (item.isPresent === true) {
          alert("Please use accidentally removed button");
        }
      }
      return item;
    });
    setStudents(newList);
  };
  const editHandler = (id) => {
    setEditable(true);
    const studentToEdit = students.find((item) => item.id === id);
    setEditableStudent(studentToEdit);
    setStudentName(studentToEdit.name);
  };
  return (
    <div className="list all-student-list">
      <h1>All students</h1>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeHandler(item.id)}>Delete</button>
            <button onClick={() => editHandler(item.id)}>Edit</button>
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
