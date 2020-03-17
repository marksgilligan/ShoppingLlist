import { useState, useEffect } from "react";
//make a hook that works exactly like useState

export function usePersistentState(initialState) {
  const [state, setState] = useState(() => {
    const existingState = localStorage.getItem("state");
    if (existingState) {
      return JSON.parse(existingState);
    }
    return initialState;
  });
  useEffect(() => {
    //when state changes save state to local storage
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
