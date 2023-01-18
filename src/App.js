import { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editable, setEditable] = useState(false);
  const [editableNotes, setEditableNotes] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");

  // const createHandler = (e) => {
  //   e.preventDefault();
  //   if (!noteTitle) {
  //     alert("Please enter a title");
  //   } else {
  //     const newNote = {
  //       id: Date.now() + "",
  //       title: noteTitle,
  //     };
  //     setNotes([...notes, newNote]);
  //     setNoteTitle("");
  //   }
  // };

  // const removeHandler = (id) => {
  //   const newNoteArray = notes.filter((items) => items.id !== id);
  //   setNotes(newNoteArray);
  // };

  // const editHandler = (id) => {
  //   setEditable(true);
  //   const findNoteToEdit = notes.find((item) => item.id === id);
  //   console.log(findNoteToEdit);
  //   setEditableNotes(findNoteToEdit);
  //   setNoteTitle(findNoteToEdit.title);
  // };

  // const updateHandler = (e) => {
  //   e.preventDefault();
  //   const newNote = notes.map((item) => {
  //     if (item.id === editableNotes.id) {
  //       item.title = noteTitle;
  //     }
  //     return item;
  //   });

  //   setNotes(newNote);
  //   setEditable(false);
  //   setEditableNotes(null);
  //   setNoteTitle("");
  // };
  return (
    <div className="App">
      <Forms
        setNoteTitle={setNoteTitle}
        setNotes={setNotes}
        setEditable={setEditable}
        setEditableNotes={setEditableNotes}
        noteTitle={noteTitle}
        editable={editable}
        editableNotes={editableNotes}
        notes={notes}
      />
      {/* <div className="Notes">
        <ul className="NoteList">
          {notes?.map((item) => (
            <li key={item.key}>
              <span>{item.title}</span>
              <button
                onClick={() => {
                  editHandler(item.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  removeHandler(item.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <NoteList
        notes={notes}
        setNotes={notes}
        setEditable={setEditable}
        setEditableNotes={setEditableNotes}
        setNoteTitle={setNoteTitle}
        editable={editable}
      />
    </div>
  );
}

export default App;
