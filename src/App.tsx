import "./App.css";
import Menu from "./components/Menu";
import { DataBoxList, CounterType } from "./components/DataBox";
import Footer from "./components/Footer";
import { useState, SyntheticEvent } from "react";
import Title from "./components/Title";
import { ToDoView } from "./components/TodoView";
import { ITask, Tag } from "./types";

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
    const taskId = crypto.randomUUID();
    const newTask: ITask = {
      id: taskId,
      createdAt: new Date(),
      title: "task " + taskId.split("-")[0],
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

  const handleClickOnTask = (e: SyntheticEvent) => {
    const taskId = e.target.id
      ? e.target.id
      : e.target.parentNode.parentNode.id;
    const newActiveTask = tasks.find((t) => t.id === taskId);
    setActiveTask(newActiveTask);
  };

  const handleChangeTitle = (e: SyntheticEvent) => {
    if (activeTask) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeTask.id) {
          return {
            ...t,
            title: e.target.value,
          };
        }
        return t;
      });
      setTasks([...updatedTasks]);
      setActiveTask({
        ...activeTask,
        title: e.target.value,
      });
    }
  };
  const handleChangeTags = (value: Tag[]): void => {
    if (activeTask) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeTask.id) {
          return {
            ...t,
            tags: value,
          };
        }
        return t;
      });
      setTasks([...updatedTasks]);
      setActiveTask({
        ...activeTask,
        tags: value,
      });
    }
  };

  const handleChangeDescription = (e: SyntheticEvent) => {
    if (activeTask) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeTask.id) {
          return {
            ...t,
            text: e.target.value,
          };
        }
        return t;
      });
      setTasks([...updatedTasks]);
      setActiveTask({
        ...activeTask,
        text: e.target.value,
      });
    }
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
        handleChangeDescription={handleChangeDescription}
        handleChangeTitle={handleChangeTitle}
        handleChangeTags={handleChangeTags}
        handleClickOnTask={handleClickOnTask}
        markAsDeleteTask={markAsDeleteTask}
      />
      <Footer />
    </>
  );
}

export default App;
