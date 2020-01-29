import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
`;

const Color = styled.div`
  width: 2rem;
  height: 2rem;

  margin-right: 1rem;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: 50%;
  border: ${({ bgColor, selectedColor }) =>
    bgColor === selectedColor ? "2px solid Grey" : "2px solid #ffffff"};
`;

export default function Palette({ colors, selectedColor, dispatch }) {
  return (
    <Wrapper>
      {colors.map(colors => (
        <Color
          bgColor={colors.color}
          pk={colors.pk}
          selectedColor={selectedColor}
          onClick={() => dispatch({ type: "Select", change: colors })}
        />
      ))}
    </Wrapper>
  );
}
