import React, { useState } from "react";
import NoteContext from "./noteContext";

import { colorBox, addModaleCss, addUpdateModaleCss } from "../Functions/MyFun";
// Using Context Api we can transfer data easily from one component of other.
// The data may be an object or even a Function
// Use this Later

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // Fetched Notes
  let note = [];
  const [notes, setNotes] = useState(note);

  // Get all Note
  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/inote/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    // JSON Returning me an object
    const json = await response.json();
    const noteData = json.note;
    setNotes(noteData);
  };
  // Done

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/inote/createnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();

    // Logic to Add the Note
    const note = {
      _id: "6503f78a18efe79056d117e2",
      user: "6503f6ea18efe79056d117dc",
      title: title,
      description: description,
      tag: tag,
      date: "2023-09-15T06:08:47.360Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Done

  // Delete a Note
  const deleteNote = async (id) => {
    // TODO API Call
    const response = await fetch(`${host}/inote/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
    });
    const json = response.json();

    // Logic to Delete the Note
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Done

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/inote/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNote = JSON.parse(JSON.stringify(notes))
    // Logic to edit the client
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote)
  };
  return (
    <NoteContext.Provider
      value={{
        addModaleCss,
        addUpdateModaleCss,
        notes,
        editNote,
        addNote,
        deleteNote,
        getNotes,
        colorBox,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
