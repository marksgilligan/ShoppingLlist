import { useState, useEffect } from "react";
//make a hook that works exactly like useState

export function usePersistentState(initialState, key = "default_key") {
  const [state, setState] = useState(() => {
    const existingState = localStorage.getItem(key);
    if (existingState) {
      return JSON.parse(existingState);
    }
    return initialState;
  });

  useEffect(() => {
    //when state changes save state to local storage
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
