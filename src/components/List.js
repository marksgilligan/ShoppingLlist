import React from "react";

//create List function to render list to the page as it changes.
//We need to pass down list as a prop
//we need to call on the list and map over it
//we map over it and place each item in a list element.

function List({ list, toggleCompleted, handleDelete }) {
  return list.map((x, i) => (
    <>
      <li
        onClick={() => toggleCompleted(i)}
        className={x.completed ? "completed" : null}
      >
        {x.name}
      </li>

      <button className="listButton" onClick={() => handleDelete(i)}>
        Delete
      </button>
    </>
  ));
}

export default List;
