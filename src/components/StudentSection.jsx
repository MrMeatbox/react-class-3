import React from "react";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";
import StudentList from "./StudentList";

const StudentSection = (props) => {
  return (
    <div className="student-section">
      <StudentList
        students={props.students}
        setStudents={props.setStudents}
        setEditable={props.setEditable}
        setEditableStudent={props.setEditableStudent}
        setStudentName={props.setStudentName}
      />
      <PresentList students={props.students} setStudents={props.setStudents} />
      <AbsentList students={props.students} setStudents={props.setStudents} />
    </div>
  );
};

export default StudentSection;
