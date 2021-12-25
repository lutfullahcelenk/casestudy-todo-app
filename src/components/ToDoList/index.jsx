import React from "react";
import ToDoItem from "../ToDoItem";
import { ToDoListButton, ToDoListContainer } from "./styles";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";

const ToDoList = ({ tasks, setTasks, deleteTask, completeTask }) => {

  const deleteSelectedTasks = () => {
      const selected = tasks.filter((task) => !task.isDone)
      setTasks(selected);
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
          Delete Selected Tasks <DeleteIcon />
        </ToDoListButton>

      </ToDoListContainer>
    </>
  );
};

export default ToDoList;
