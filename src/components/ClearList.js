import React from "react";

//we need access to both setList and list so we hand those down asprops
//we create a new button to add a handleclick function or
//in this function we want to use the setList function we passed down and clear it out as an empty array.
//-->App.js

function ClearList({ setList }) {
  function handleClick() {
    setList([]);
  }
  return <button onClick={handleClick}>Clear List</button>;
}

export default ClearList;
