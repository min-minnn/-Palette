import React from "react";
import styled from "styled-components";
import useInput from "./hooks";

const Wrapper = styled.div`
  width: 100%;

  margin-top: 1rem;

  text-align: start;
`;

const Input = styled.input`
  width: 20rem;

  font-size: 1rem;
`;

const Typography = styled.p`
  color: ${({ color }) => color};
  font-size: 2rem;
`;

// styled-components 관련은 Palette.js 파일 참고.

export default function Text({ selectedColor, count, dispatch }) {
  // 아래 두 줄을 지우고 시작하세요.
  const [state, setInput] = useInput();
  const input = state;

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <Wrapper>
      <Input value={input} onChange={setInput} />
      <Typography color={selectedColor}>{input}</Typography>
      <Typography color={selectedColor}>{count}</Typography>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </Wrapper>
  );
}
