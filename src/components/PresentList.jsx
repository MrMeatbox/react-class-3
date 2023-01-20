import { React, useContext } from "react";
import { StudentContext } from "./../context/StudentProvider";

const PresentList = ({ accidentHandler }) => {
  const { students } = useContext(StudentContext);
  return (
    <div className="list present-student-list">
      <h1>Present students</h1>
      <ul>
        {students
          .filter((student) => student.isPresent === true)
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

export default PresentList;
