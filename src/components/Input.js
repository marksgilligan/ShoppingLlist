import React, { useState } from "react";

//create an input field
//create a button
//return both wrapped in a div
//track user input in input
//useState to store the value of user input and use the setValue function to reassign it with a new value
//we can use the onChange attribute to do this.
//this returns an event object with lots of information we can access
//one bit of this is target, which we can use to extract the value from the input field
//create a function that tracks this change and stores the value in a new variable using the setValue function
//save that input value when a button is clicked
//we can add on onClick function to a button that calls a function
//in this function we can grab the current value of value(thanks to handleChange constantly tracking the value and saving it)
//-->App.js

//in our handleclick function we want to now use the new function handed down as a prob to add that valjue to the list array
//we can also now reset the value of input so the user doesnt have to remove the existing text before entering in the next item.
//-->App.js

function Input({ addToList }) {
  const [value, setValue] = useState();

  function handleChange(eventObject) {
    const newValue = eventObject.target.value;
    setValue(newValue);
  }

  function handleClick() {
    addToList({ name: value, completed: false });
    setValue("");
  }

  return (
    <div className="input">
      <input
        placeholder="enter item here"
        onChange={handleChange}
        value={value}
      />

      <button onClick={handleClick}>Add to List</button>
    </div>
  );
}

export default Input;
