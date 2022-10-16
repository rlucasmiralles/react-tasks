import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title: title, descripcion: descripcion });
    setTitle('');
    setDescripcion('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escriba su tarea"
        type="text"
        name=""
        id=""
        value={title}
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
      >
      </textarea>
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
