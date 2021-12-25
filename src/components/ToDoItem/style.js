import styled from "styled-components";

export const ToDoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #00bd94;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  margin: 1rem 0;
`;

export const ToDoItemText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
`;

export const ToDoItemButtonContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;
