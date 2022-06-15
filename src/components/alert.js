import React from "react";
import styled, { css } from "styled-components";

const AlertBox = styled.div`
  padding: 2rem;
  font-size: 2rem;
  border-radius: 10px;
  margin: 20px 0;
  ${({ variant }) =>
    variant == "success" &&
    css`
      background-color: ${(props) => props.theme.colors.backgroundSuccess};
      color: ${(props) => props.theme.colors.textSuccess};
    `}
  ${({ variant }) =>
    variant == "danger" &&
    css`
      background-color: ${(props) => props.theme.colors.backgroundError};
      color: ${(props) => props.theme.colors.textError};
    `}
`;
const Alert = (props) => {
  return (
    <>{props && <AlertBox variant={props.variant}>{props.message}</AlertBox>}</>
  );
};
export default Alert;
