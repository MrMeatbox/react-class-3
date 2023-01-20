import { useContext, React } from "react";
import { StudentContext } from "../context/StudentProvider";

const Form = (props) => {
  const stCtx = useContext(StudentContext);
  const createHandler = (e) => {
    e.preventDefault();
    if (!stCtx.studentName) {
      alert("Please enter a student name");
    } else {
      const newStudent = {
        id: Date.now() + "",
        name: stCtx.studentName,
        isPresent: undefined,
      };
      stCtx.setStudents([...stCtx.students, newStudent]);
      stCtx.setStudentName("");
    }
  };
  const upadteHandler = (e) => {
    e.preventDefault();
    const editedStudent = stCtx.students.map((item) => {
      if (item.id === stCtx.editableStudent.id) {
        item.name = stCtx.studentName;
      }
      return item;
    });
    stCtx.setStudents(editedStudent);
    stCtx.setStudentName("");
    stCtx.setEditable(false);
    stCtx.setEditableStudent(null);
  };
  return (
    <form onSubmit={stCtx.editable ? upadteHandler : createHandler}>
      <input
        type="text"
        value={stCtx.studentName}
        onChange={(event) => {
          stCtx.setStudentName(event.target.value);
        }}
      />
      <button
        onClick={(e) => {
          stCtx.editable ? upadteHandler(e) : createHandler(e);
        }}
      >
        {stCtx.editable ? "Update Student" : "Add student"}
      </button>
    </form>
  );
};

export default Form;
