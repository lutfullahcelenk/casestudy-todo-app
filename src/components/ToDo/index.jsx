import React, { useState } from "react";
import Input from "../Input/index.jsx";
import ToDoList from "../ToDoList/index.jsx";
import { TodoContainer } from "./styles.js";
import { initialToDos } from "../../constants/initialToDos";

const ToDo = () => {
  const [tasks, setTasks] = useState(initialToDos);

  //ADD TASK
  const addTask = (task) => {
    const id = Date.now();
    const newTask = { ...task, id };
    setTasks((prevState) => [...prevState, newTask]);
  };

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => id !== task.id))
  };

  //EDIT TASK
  const editTask = () => {};

  //COMPLETE TASK
  const completeTask = (id) => {
    let completed = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(completed);
  };

  return (
    <>
      <TodoContainer>
        <h1>Lutfullah's ToDoApp</h1>
        <Input addTask={addTask} />
        <ToDoList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          completeTask={completeTask}
        />
      </TodoContainer>
    </>
  );
};

export default ToDo;
