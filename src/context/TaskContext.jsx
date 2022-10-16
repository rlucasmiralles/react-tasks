import { createContext } from "react";
import { useState, useEffect } from "react";
import { tareas as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(data);
  }, []);

  function createTask(task) {
    const nuevaTarea = {
      title: task.title,
      id: tareas.length,
      description: task.descripcion,
    };

    setTareas([...tareas, nuevaTarea]);
  }

  function deleteTask(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <TaskContext.Provider
      value={{
        tareas,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
