import React, {useContext} from 'react'
import Delete from '../assets/delete.svg'
import Edit from '../assets/edit.svg'
// Importing Context API
import noteContext from '../Context/noteContext'

const Noteitem = (props) => {
  const data = useContext(noteContext);
  const { deleteNote, addUpdateModaleCss } = data;
  const { note, updateNote } = props;

  return (
      <li className="note">
          <div className="details">
            <p>{note.title}</p>
            <span>{note.description}</span>
            <span style={{padding: '5px 8px', background: '#999', marginTop: '3px', borderRadius: '20px', display: 'inline-block'}}>{note.tag}</span>
            {/* <span>{note._id}</span> */}
          </div>
          <div className="bottom-content">
            {/* <span>Sep 5, 2023</span> */}
            {/* <span>{note.date.substr(0, 10)}</span> */}
            <div className="setting"  id='editBox'>
              <div  className='delete'>
                <img src={Delete} alt="Setting" onClick={()=> {deleteNote(note._id)}} />
              </div>
              <div className='edit'>
                <img src={Edit} alt="edit" onClick={()=>{ 
                  addUpdateModaleCss(); 
                  updateNote(note);
                }} />
              </div>
            </div>
          </div>
        </li>
  )
}

export default Noteitem
