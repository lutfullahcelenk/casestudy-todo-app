import React from "react";
import Input from "../Input/index.jsx";
import ToDoList from "../ToDoList/index.jsx";
import { TodoContainer } from "./styles.js";

const ToDo = () => {
  return (
    <>
      <TodoContainer>
        <h1>Lutfullah's ToDoApp</h1>
        <Input />
        <ToDoList />
      </TodoContainer>
    </>
  );
};

export default ToDo;
