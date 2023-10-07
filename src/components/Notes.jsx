import React, {useContext, useEffect, useState} from 'react'
import noteContext from '../Context/noteContext'
import Noteitem from './Noteitem'
const Notes = () => {
  const data = useContext(noteContext)
  const { notes, getNotes, addModaleCss, addUpdateModaleCss, editNote } = data;
  const [ note, setNote ] = useState({id: "", etitle: "", edescription: "", etag: ""});

  useEffect(()=> {
    getNotes()
  }, [])

  const updateNote = (currentNote)=> {
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }
  const onChange = (e)=> {
      setNote({...note, [e.target.name]: e.target.value})
  }
  const handleClick = (e)=> {
    e.preventDefault()
    editNote(note.id, note.etitle, note.edescription, note.etag)
    addUpdateModaleCss()
  }

  return (
    <div className='wrapper'>
        <li className='add-box'>
          <div className="icon" onClick={addModaleCss}>+</div>
          <h2>Add Note</h2>
        </li>
        <>
          { notes.map((note)=> {
             return (
               <Noteitem key = {note._id} updateNote ={updateNote} note = {note} /> 
             )
           })}
        </>
        <div className="updateDataBox" id="updateHide" >
          <div className="titleBox">
            <label htmlFor="title">Enter Title</label>
            <input type="text" name="etitle" id="etitle" value={note.etitle} onChange={onChange} />
          </div>
          <div className="descBox">
            <label htmlFor="description">Enter Description</label>
            <input
              type="text"
              name="edescription"
              id="edescription" 
              value={note.edescription}
              onChange={onChange}
            />
          </div>
          <div className="tagBox">
            <label htmlFor="tag"></label>
            <input
              type="text"
              placeholder="Enter a Tag"
              name="etag"
              id="etag" 
              value={note.etag}
              onChange={onChange}
            />
          </div>
          <div className="addDiscardBox">
            <button type="submit" onClick={ handleClick }>Update</button>
            <button type="submit" onClick={addUpdateModaleCss}>
              Discard
            </button>
          </div>
      </div>
    </div>
  )
}

export default Notes
