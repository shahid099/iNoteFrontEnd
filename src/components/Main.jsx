import React, { useContext } from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";
import noteContext from '../Context/noteContext';
const Main = () => {
  const data = useContext(noteContext);

  return (
    <div>
      <div className="mainHeader">
        <AddNote />
        <Notes />
      </div>
      <div className="mainFooter">
        {data.colorBox}
      </div>
    </div>
  );
};

export default Main;