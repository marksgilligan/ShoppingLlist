import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import ClearList from "./components/ClearList";
import { usePersistentState } from "./libs/usePersistentState";

//create a place to store list items
//create somewhere for the user to input a list item
//create Input.js -->

//We now need a place to store the information provided by input into an array
//create an empty list array using useState.
//create a function we can use to store the values into the list using setList
//pass down the setList function as a prop so we can use it in Input.js as a function.
//Input.js-->

//We now need a place to render the list onto the page
//Create a List component to manage the list render
//List.js-->

//We call List and send list down as a prop
//we now need a way to clear the list
//we create a new component Clearlist.js
//ClearList.js-->

//Call ClearList function and hand down list, and setList as props

function App() {
  const [list, setList] = usePersistentState([
    { name: "beans", completed: false },
    { name: "carrots", completed: false },
    { name: "choccy", completed: false }
  ]);

  function toggleCompleted(i) {
    const listStart = list.slice(0, i);
    const listEnd = list.slice(i + 1);
    setList([
      ...listStart,
      { name: list[i].name, completed: !list[i].completed },
      ...listEnd
    ]);
    console.log(listStart, "start", listEnd, "end");
  }

  function addToList(inputValue) {
    setList([...list, inputValue]);
  }

  function handleDelete(i) {
    const listStart = list.slice(0, i);
    const listEnd = list.slice(i + 1);
    setList([...listStart, ...listEnd]);
  }

  return (
    <>
      <h1>SHOPPING LIST</h1>
      <Input addToList={addToList} />
      <section className="list">
        <ul>
          <List
            list={list}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          />
        </ul>
        <ClearList list={list} setList={setList} />
      </section>
    </>
  );
}

export default App;
