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
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  border-radius: 10px;
  outline: none;
  width: 70%;
  background: #00bd94;
  color: #fff;

  &::placeholder {
    color: #e2e2e2;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  background-color: #5d0cff;
  color: white;
  text-transform: capitalize;
`;
