import React from "react";
import {
  ToDoItemButtonContainer,
  ToDoItemContainer,
  ToDoItemText,
} from "./style";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import { TiTick as TickIcon } from "react-icons/ti";

const ToDoItem = ({ task, deleteTask, editTask, completeTask }) => {
  return (
    <>
      <ToDoItemContainer
        className={
          task.isDone ? "todo-uncompleted completed" : "todo-uncompleted"
        }
      >
        <ToDoItemText key={task.id}>{task.text}</ToDoItemText>

        <ToDoItemButtonContainer>
          <TickIcon onClick={() => completeTask(task.id)} />

          <DeleteIcon onClick={() => deleteTask(task.id)} />
        </ToDoItemButtonContainer>
      </ToDoItemContainer>
    </>
  );
};

export default ToDoItem;
