import React, { useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./styles";

const Input = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !text
      ? alert("Please enter an appropriate task...")
      : addTask({ text, isDone: false });
    setText("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Add your task here..."
          type={"text"}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <StyledButton type={"submit"}>Add Task</StyledButton>
      </StyledForm>
    </>
  );
};

export default Input;
