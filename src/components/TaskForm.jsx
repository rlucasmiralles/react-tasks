import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title: title, descripcion: descripcion });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-3"
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
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
