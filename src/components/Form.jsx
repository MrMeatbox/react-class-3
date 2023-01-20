import { useContext, React } from "react";
import { StudentContext } from "../context/StudentProvider";
// import { studentReducer } from "./../reducers/student";

const Form = () => {
  const { studentStates, dispatch } = useContext(StudentContext);
  const createHandler = (e) => {
    e.preventDefault();
    if (!studentStates.studentName) {
      alert("Please enter a student name");
    } else {
      dispatch({ type: "add_student" });
    }
  };
  const upadteHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "update_student" });
  };
  return (
    <form onSubmit={studentStates.editable ? upadteHandler : createHandler}>
      <input
        type="text"
        value={studentStates.studentName}
        onChange={(event) => {
          dispatch({
            type: "change_student_name",
            payload: event.target.value,
          });
        }}
      />
      <button
        onClick={(e) => {
          studentStates.editable ? upadteHandler(e) : createHandler(e);
        }}
      >
        {studentStates.editable ? "Update Student" : "Add student"}
      </button>
    </form>
  );
};

export default Form;
