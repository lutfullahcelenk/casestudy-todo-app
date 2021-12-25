import React from "react";
import ToDoItem from "../ToDoItem";
import { ToDoListContainer } from "./styles";

const ToDoList = ({ tasks }) => {
  return (
    <>
      <ToDoListContainer>
        {tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}
      </ToDoListContainer>
    </>
  );
};

export default ToDoList;
