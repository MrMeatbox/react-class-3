import React from "react";

const StudentList = (props) => {
  const removeHandler = (id) => {
    const afterRemoved = props.students.filter((item) => item.id !== id);

    props.setStudents(afterRemoved);
  };
  const presentHandler = (id) => {
    const newList = props.students.map((item) => {
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
    props.setStudents(newList);
  };
  const absentHandler = (id) => {
    const newList = props.students.map((item) => {
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
    props.setStudents(newList);
  };
  const editHandler = (id) => {
    props.setEditable(true);
    const studentToEdit = props.students.find((item) => item.id === id);
    props.setEditableStudent(studentToEdit);
    props.setStudentName(studentToEdit.name);
  };
  return (
    <div className="list all-student-list">
      <h1>All students</h1>
      <ul>
        {props.students.map((item) => (
          <li>
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
