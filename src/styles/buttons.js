import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background1};
  border: none;
  font-size: 1.3rem;
  border-radius: 4px;
  margin: 30px 0;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: not-allowed;
  }
  svg {
    color: ${(props) => props.theme.colors.background1};
    height: 16px;
    width: 16px;
  }
`;
export const SubsButton = styled.button`
  padding: 2rem;
  background-color: #f2f2f2;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  &:hover {
    background-color: darkgray;
  }
`;
