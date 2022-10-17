import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


const TaskList = () => {
 
  const {tareas} = useContext(TaskContext)

  if (tareas.length === 0) { 
    return <h1 className="text-white text-4xl mx-auto font-bold text-center">No hay tareas pendientes</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
       <TaskCard key={tarea.id} tarea={tarea}/>
      ))}
    </div>
  );
};

export default TaskList;
