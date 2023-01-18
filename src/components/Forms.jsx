import React from "react";

const Forms = (props) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (!props.noteTitle) {
      alert("Please enter a title");
    } else {
      const newNote = {
        id: Date.now() + "",
        title: props.noteTitle,
      };
      props.setNotes([...props.notes, newNote]);
      props.setNoteTitle("");
    }
  };
  const updateHandler = (e) => {
    e.preventDefault();
    const newNote = props.notes.map((item) => {
      if (item.id === props.editableNotes.id) {
        item.title = props.noteTitle;
      }
      return item;
    });

    props.setNotes(newNote);
    props.setEditable(false);
    props.setEditableNotes(null);
    props.setNoteTitle("");
  };
  return (
    <div>
      <form onSubmit={props.editable ? updateHandler : createHandler}>
        <input
          value={props.noteTitle}
          type="text"
          onChange={(event) => {
            props.setNoteTitle(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createHandler();
          }}
          type="submit"
        >
          {props.editable ? "Edit note title" : "Add note"}
        </button>
      </form>
    </div>
  );
};

export default Forms;
