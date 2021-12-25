import React from "react";
import Input from "../Input/index.jsx";
import ToDoList from "../ToDoList/index.jsx";
import { TodoContainer } from "./styles.js";
import useToDoLogic from "../../hooks/useToDoLogic.js";

const ToDo = () => {
  
  const { tasks, addTask, deleteTask, completeTask } = useToDoLogic();

  return (
    <>
      <TodoContainer>
        <h1>Lutfullah's ToDoApp</h1>
        <Input addTask={addTask} />
        <ToDoList
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </TodoContainer>
    </>
  );
};

export default ToDo;
