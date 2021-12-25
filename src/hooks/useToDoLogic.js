import { useState } from 'react';
import { initialToDos } from '../constants/initialToDos';

const useToDoLogic = () => {
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
  
    //COMPLETE TASK
    const completeTask = (id) => {
      let completed = tasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      });
      setTasks(completed);
    };
    return {
        tasks,
        setTasks,
        addTask,
        deleteTask,
        completeTask
    }
}

export default useToDoLogic;
