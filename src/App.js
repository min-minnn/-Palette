import React, { useReducer } from "react";
import styled from "styled-components";
import Palette from "./Palette";
import Text from "./Text";

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const colors = [
  { pk: 1, color: "#000000" },
  { pk: 2, color: "#ff0000" },
  { pk: 3, color: "#ffff00" },
  { pk: 4, color: "#0000ff" },
  { pk: 5, color: "#7700ff" }
];

const initialState = {
  count: 0,
  color: "#000000"
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "Select":
      return { ...state, color: action.change.color };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Wrapper>
      <Palette
        colors={colors}
        selectedColor={state.color}
        dispatch={dispatch}
      />
      <Text
        selectedColor={state.color}
        count={state.count}
        dispatch={dispatch}
      />
    </Wrapper>
  );
}
