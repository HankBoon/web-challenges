import styled, { css } from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledDiv $isBlack={isBlack}></StyledDiv>;
}

const StyledDiv = styled.div`
  background-color: green;
  width: 100px;
  height: 100px;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  /* background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")}; */
  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}
`;
