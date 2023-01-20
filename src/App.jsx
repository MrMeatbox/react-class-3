// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StudentList from "./components/StudentList";
import PresentList from "./components/PresentList";
import AbsentList from "./components/AbsentList";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Form
        setStudents={setStudents}
        setStudentName={setStudentName}
        setEditable={setEditable}
        editable={editable}
        setEditableStudent={setEditableStudent}
        studentName={studentName}
        editableStudent={editableStudent}
        students={students}
      />
      <div className="student-section">
        <StudentList
          students={students}
          setStudents={setStudents}
          setEditable={setEditable}
          setEditableStudent={setEditableStudent}
          setStudentName={setStudentName}
        />
        <PresentList students={students} setStudents={setStudents} />
        <AbsentList students={students} setStudents={setStudents} />
      </div>
    </div>
  );
};

export default App;
