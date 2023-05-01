import "./App.css";
import Menu from "./components/Menu";
import { DataBoxList, CounterType } from "./components/DataBox";
import Footer from "./components/Footer";
import { useState } from "react";
import Title from "./components/Title";
import { ToDoView } from "./components/TodoView";
import { ITask } from "./types";

const stateCounter = [
  {
    key: "created",
    counter: 0,
  },
  {
    key: "completed",
    counter: 0,
  },
  {
    key: "deleted",
    counter: 0,
  },
  {
    key: "remaining",
    counter: 0,
  },
];

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [counter, setCounter] = useState<CounterType[]>(stateCounter);
  const [activeTask, setActiveTask] = useState<ITask>();

  const updateCounterByKey = (key: string, increment: number = 1) => {
    return counter.map((c) => {
      if (c.key === key) {
        c.counter += increment;
      }
      return c;
    });
  };

  const addTask = () => {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      title: "newTask",
      active: true,
      state: "created",
    };
    const previousTasks = tasks.map((t) => {
      t.active = false;
      return t;
    });
    setActiveTask(newTask);
    setTasks([newTask, ...previousTasks]);
    setCounter(updateCounterByKey("created"));
    setCounter(updateCounterByKey("remaining"));
  };

  const markAsCompleteTask = (taskId: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.state = "completed";
      }
      return t;
    });
    setTasks([...updatedTasks]);
    setCounter(updateCounterByKey("remaining", -1));
    setCounter(updateCounterByKey("completed"));
  };

  const markAsDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.state = "deleted";
      }
      return t;
    });
    setTasks([...updatedTasks]);
    setCounter(updateCounterByKey("deleted"));
    setCounter(updateCounterByKey("remaining", -1));
  };

  return (
    <>
      <Menu />
      <DataBoxList counter={counter} />
      <Title handleNewTask={addTask} />
      <ToDoView
        tasks={tasks}
        activeTask={activeTask}
        markAsCompleteTask={markAsCompleteTask}
        markAsDeleteTask={markAsDeleteTask}
      />
      <Footer />
    </>
  );
}

export default App;
