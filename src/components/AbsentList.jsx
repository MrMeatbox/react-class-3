import { React, useContext } from "react";
import { StudentContext } from "./../context/StudentProvider";

const AbsentList = () => {
  const { studentStates, dispatch } = useContext(StudentContext);
  return (
    <div className="list abesent-student-list">
      <h1>Absent students</h1>
      <ul>
        {studentStates.students
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button
                onClick={() =>
                  dispatch({ type: "accident_handler", payload: item.id })
                }
              >
                Accidentally added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentList;
