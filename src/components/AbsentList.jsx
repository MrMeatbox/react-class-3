import { React, useContext } from "react";
import { StudentContext } from "./../context/StudentProvider";

const AbsentList = ({ accidentHandler }) => {
  const { students } = useContext(StudentContext);
  return (
    <div className="list abesent-student-list">
      <h1>Absent students</h1>
      <ul>
        {students
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => accidentHandler(item.id)}>
                Accidentally added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentList;
