// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
// function App() {
//   return <div className="App">Hello Attendance App.</div>;
// }

// export default App;

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please enter a student name");
    } else {
      const newStudent = {
        id: Date.now() + "",
        name: studentName,
        isPresent: undefined,
      };
      setStudents([...students, newStudent]);
      setStudentName("");
    }
  };
  const removeHandler = (id) => {
    const afterRemoved = students.filter((item) => item.id !== id);

    setStudents(afterRemoved);
  };

  const presentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = true;
        } else if (item.isPresent === true) {
          alert("Student already present");
        } else if (item.isPresent === false) {
          alert("Please use accidentally added button");
        }
      }
      return item;
    });
    setStudents(newList);
  };

  const absentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = false;
        } else if (item.isPresent === false) {
          alert("Student already is absent list");
        } else if (item.isPresent === true) {
          alert("Please use accidentally removed button");
        }
      }
      return item;
    });
    setStudents(newList);
  };

  const accidentHandler = (id) => {
    const newList = students.map((item) => {
      if (item.id === id) {
        item.isPresent = !item.isPresent;
      }
      return item;
    });
    setStudents(newList);
  };

  const editHandler = (id) => {
    setEditable(true);
    const studentToEdit = students.find((item) => item.id === id);
    setEditableStudent(studentToEdit);
    setStudentName(studentToEdit.name);
  };

  const upadteHandler = (e) => {
    e.preventDefault();
    const editedStudent = students.map((item) => {
      if (item.id === editableStudent.id) {
        item.name = studentName;
      }
      return item;
    });
    setStudents(editedStudent);
    setStudentName("");
    setEditable(false);
    setEditableStudent(null);
  };
  return (
    <div className="App">
      <form onSubmit={editable ? upadteHandler : createHandler}>
        <input
          type="text"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value);
          }}
        />
        <button
          onClick={(e) => {
            editable ? upadteHandler(e) : createHandler(e);
          }}
        >
          {editable ? "Update Student" : "Add student"}
        </button>
      </form>
      <div className="student-section">
        <div className="list all-student-list">
          <h1>All students</h1>
          <ul>
            {students.map((item) => (
              <li>
                <span>{item.name}</span>
                <button onClick={() => removeHandler(item.id)}>Delete</button>
                <button onClick={() => editHandler(item.id)}>Edit</button>
                <button onClick={() => presentHandler(item.id)}>
                  Make present
                </button>
                <button onClick={() => absentHandler(item.id)}>
                  Make absent
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list present-student-list">
          <h1>Present students</h1>
          <ul>
            {students
              .filter((student) => student.isPresent === true)
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
        <div className="list abesent-student-list">
          <h1>Absent students</h1>
          <ul>
            {students
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
      </div>
    </div>
  );
};

export default App;
