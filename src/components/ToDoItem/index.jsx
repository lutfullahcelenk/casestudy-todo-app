import React from "react";
import {
  ToDoItemButtonContainer,
  ToDoItemContainer,
  ToDoItemText,
} from "./style";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { TiTick as TickIcon } from "react-icons/ti";

const ToDoItem = ({ task }) => {
  return (
    <>
      <ToDoItemContainer>
        <ToDoItemText key={task.id}>{task.text}</ToDoItemText>

        <ToDoItemButtonContainer>
          <TickIcon />
          <DeleteIcon />
          <EditIcon />
        </ToDoItemButtonContainer>
      </ToDoItemContainer>
    </>
  );
};

export default ToDoItem;
