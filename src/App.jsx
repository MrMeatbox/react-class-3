// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StudentSection from "./components/StudentSection";

const App = () => {
  // const [studentName, setStudentName] = useState("");
  // const [students, setStudents] = useState([]);
  // const [editable, setEditable] = useState(false);
  // const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Form
      // setStudents={setStudents}
      // setStudentName={setStudentName}
      // setEditable={setEditable}
      // editable={editable}
      // setEditableStudent={setEditableStudent}
      // studentName={studentName}
      // editableStudent={editableStudent}
      // students={students}
      />
      <StudentSection
      // students={students}
      // setStudents={setStudents}
      // setEditable={setEditable}
      // setEditableStudent={setEditableStudent}
      // setStudentName={setStudentName}
      />
    </div>
  );
};

export default App;
