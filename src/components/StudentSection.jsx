import { React, useContext } from "react";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";
import StudentList from "./StudentList";
import { StudentContext } from "./../context/StudentProvider";

const StudentSection = () => {
  return (
    <div className="student-section">
      <StudentList />
      <PresentList />
      <AbsentList />
    </div>
  );
};

export default StudentSection;
