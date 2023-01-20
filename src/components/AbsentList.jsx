import React from "react";

const AbsentList = (props) => {
  const accidentHandler = (id) => {
    const newList = props.students.map((item) => {
      if (item.id === id) {
        item.isPresent = !item.isPresent;
      }
      return item;
    });
    props.setStudents(newList);
  };
  return (
    <div className="list abesent-student-list">
      <h1>Absent students</h1>
      <ul>
        {props.students
          .filter((student) => student.isPresent === false)
          .map((item) => (
            <li>
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
