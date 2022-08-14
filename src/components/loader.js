import React from "react";
import styled from "styled-components";
import { waveText } from "../styles/keyframes";
const LoaderWrapper = styled.div`
  display: flex;
  height: 95vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;
const Letter = styled.span`
  display: flex;
  font-family: ${(props) => props.theme.fonts.logo};
  font-size: 4rem;
  font-weight: 700;
  color: rgb(14, 165, 233);
  height: max-content;
  animation: ${waveText} 2s ease-in-out infinite;
  animation-delay: calc(0.1s * ${(props) => props.index});
`;
export default function loader() {
  const letters = ["I", "b", "t", "e", " A", "h", "a", "s", "a", "n"];
  return (
    <LoaderWrapper>
      {letters.map((letter, i) => (
        <Letter index={i} key={i}>
          {letter}
        </Letter>
      ))}
    </LoaderWrapper>
  );
}
