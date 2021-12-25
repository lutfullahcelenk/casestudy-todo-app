import React from "react";
import ToDoItem from "../ToDoItem";
import { ToDoListContainer } from "./styles";

const ToDoList = ({ tasks, deleteTask, editTask, completeTask }) => {
  return (
    <>
      <ToDoListContainer>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            completeTask={completeTask}
          />
        ))}
      </ToDoListContainer>
    </>
  );
};

export default ToDoList;
