import React from "react";
import Input from "../Input/index.jsx";
import ToDoList from "../ToDoList/index.jsx";
import { TodoContainer, TodoTitle } from "./styles.js";
import useToDoLogic from "../../hooks/useToDoLogic.js";

const ToDo = () => {
  const { tasks, setTasks, addTask, deleteTask, completeTask } = useToDoLogic();

  return (
    <>
      <TodoContainer>
        <TodoTitle>Lütfullah's ToDoApp</TodoTitle>

        <Input addTask={addTask} />

        <ToDoList
          tasks={tasks}
          setTasks={setTasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </TodoContainer>
    </>
  );
};

export default ToDo;
