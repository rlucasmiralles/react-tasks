import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


const TaskList = () => {
 
  const {tareas} = useContext(TaskContext)

  if (tareas.length === 0) { 
    return <h1>No hay tareas pendientes</h1>;
  }
  return (
    <div>
      {tareas.map((tarea) => (
       <TaskCard key={tarea.id} tarea={tarea}/>
      ))}
    </div>
  );
};

export default TaskList;
