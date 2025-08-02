import { Task } from "./components/Task";
import { TaskAdd } from "./components/TaskAdd";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (name.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: name,
      description: description,
      done: false,
    };

    setTasks((mont) => [...mont, newTask]);
    setName("");
    setDescription("");
  };

  const removeTask = (id) => {
    setTasks((inf) => inf.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <main className="h-auto w-[95%] bg-[#2F2F2F] rounded-[3em] flex flex-col justify-start items-center p-[1em] mb-[2em]">
        <h1
          className="text-center text-white text-[3em]"
          style={{ fontFamily: "Brusher, cursive" }}
        >
          To Do List
        </h1>

        <TaskAdd
          name={name}
          description={description}
          setName={setName}
          setDescription={setDescription}
          addTask={addTask}
        />

        <div className="w-auto h-auto flex flex-col items-center">
          {tasks.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              description={task.description}
              done={task.done}
              onDelete={() => removeTask(task.id)}
              onToggleDone={() => toggleDone(task.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
