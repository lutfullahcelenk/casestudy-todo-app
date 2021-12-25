import React from "react";
import ToDoItem from "../ToDoItem";
import { ToDoListButton, ToDoListContainer } from "./styles";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";

const ToDoList = ({ tasks, deleteTask, completeTask }) => {
  const deleteSelectedTasks = () => {
   
  };

  return (
    <>
      <ToDoListContainer>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}

        <ToDoListButton onClick={deleteSelectedTasks}>
          Delete Tasks <DeleteIcon />
        </ToDoListButton>
      </ToDoListContainer>
    </>
  );
};

export default ToDoList;
