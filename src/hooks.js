import { useState } from "react";

function useInput() {
  const [state, onChange] = useState("");

  const setInput = e => {
    onChange(e.target.value);
  };
  return [state, setInput];
}

export default useInput;
