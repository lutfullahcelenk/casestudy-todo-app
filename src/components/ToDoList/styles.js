import styled from "styled-components";

export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #161a2b;
  text-align: center;
  margin: 12px auto;
  border-radius: 10px;
  padding: 32px 0.2rem 32px;
  /* border: 3px solid white; */
`;

export const ToDoListButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  color: white;
  cursor: pointer;
  background: purple;
  text-align: center;
  margin: 50px;
  border-radius: 10px;
  padding: 32px 0.2rem 32px;
  /* border: 3px solid white; */
`;
