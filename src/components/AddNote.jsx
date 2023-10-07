import React, {useContext, useState} from 'react'
import noteContext from '../Context/noteContext'
const AddNote = () => {
  const data = useContext(noteContext)
  const { addNote, addModaleCss } = data
  
  const [ note, setNote ] = useState({ title: "", description: "", tag: "default" })

  // OnClick Function
  const onClickHandle = (e)=> {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    // Function Invoked for hiding and seeing the input box
    addModaleCss()
  }
  
  // OnChange Function For Adding Note
  const onChange = (e)=> {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
    <div className='takeDataBox' id='hide'>
      <div className="titleBox">
        <label htmlFor="title">Enter Title</label>
        <input type="text" name="title" id="title" onChange={onChange} />
      </div>
      <div className="descBox">
        <label htmlFor="description">Enter Description</label>
        <input type="text" name="description" id="description" onChange={onChange} />
      </div>
      <div className="tagBox">
        <label htmlFor="tag"></label>
        <input type="text" placeholder='Enter a Tag' name='tag' id='tag' onChange={onChange} />
      </div>
      <div className="addDiscardBox">
        <button type="submit" onClick={onClickHandle}>Add</button>
        <button type="submit" onClick={addModaleCss}>Discard</button>
      </div>
    </div>
    </>
  )
}

export default AddNote
