import React from "react";

const NoteList = (props) => {
  const removeHandler = (id) => {
    const newNoteArray = props.notes.filter((items) => items.id !== id);
    props.setNotes(newNoteArray);
  };

  const editHandler = (id) => {
    props.setEditable(true);
    const findNoteToEdit = props.notes.find((item) => item.id === id);
    console.log(findNoteToEdit);
    props.setEditableNotes(findNoteToEdit);
    props.setNoteTitle(findNoteToEdit.title);
  };

  return (
    <div className="Notes">
      <ul className="NoteList">
        {props.notes?.map((item) => (
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
    </div>
  );
};

export default NoteList;
