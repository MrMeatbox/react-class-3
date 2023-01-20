import React from "react";

const Form = (props) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (!props.studentName) {
      alert("Please enter a student name");
    } else {
      const newStudent = {
        id: Date.now() + "",
        name: props.studentName,
        isPresent: undefined,
      };
      props.setStudents([...props.students, newStudent]);
      props.setStudentName("");
    }
  };
  const upadteHandler = (e) => {
    e.preventDefault();
    const editedStudent = props.students.map((item) => {
      if (item.id === props.editableStudent.id) {
        item.name = props.studentName;
      }
      return item;
    });
    props.setStudents(editedStudent);
    props.setStudentName("");
    props.setEditable(false);
    props.setEditableStudent(null);
  };
  return (
    <form onSubmit={props.editable ? upadteHandler : createHandler}>
      <input
        type="text"
        value={props.studentName}
        onChange={(event) => {
          props.setStudentName(event.target.value);
        }}
      />
      <button
        onClick={(e) => {
          props.editable ? upadteHandler(e) : createHandler(e);
        }}
      >
        {props.editable ? "Update Student" : "Add student"}
      </button>
    </form>
  );
};

export default Form;
