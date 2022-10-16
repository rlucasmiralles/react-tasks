import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ tarea }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{tarea.title}</h1>
      <p>{tarea.description}</p>
      <button
        onClick={() => {
          deleteTask(tarea.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
};

export default TaskCard;
