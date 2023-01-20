import { React, useContext } from "react";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";
import StudentList from "./StudentList";
import { StudentContext } from "./../context/StudentProvider";

const StudentSection = () => {
  const { students, setStudents } = useContext(StudentContext);
  const accidentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        item.isPresent = !item.isPresent;
      }
      return item;
    });
    setStudents(newList);
  };
  return (
    <div className="student-section">
      <StudentList />
      <PresentList accidentHandler={accidentHandler} />
      <AbsentList accidentHandler={accidentHandler} />
    </div>
  );
};

export default StudentSection;
