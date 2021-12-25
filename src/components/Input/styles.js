import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  background: transparent;
  color: #fff;
`;

export const StyledInput = styled.input`
  padding: 14px 32px 14px 16px;
  color: #fff;
  background: transparent;
`;

export const StyledButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background-color: #5d0cff; 
  color: white;
  text-transform: capitalize;
`;
