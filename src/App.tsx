import "./App.css";
import Menu from "./components/Menu";
import { DataBoxList } from "./components/DataBox";
import Footer from "./components/Footer";
import { useState } from "react";
import Title from "./components/Title";
import { ToDoView } from "./components/TodoView";
import { ITask, Tag, CounterType, csvData } from "./types";

function App() {
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

  const updateCounterByKey = (
    localCounter: CounterType[],
    key: string,
    increment: number = 1
  ) => {
    return localCounter.map((c) => {
      if (c.key === key) {
        c.counter += increment;
      }
      return { ...c };
    });
  };
  const initCounter = (initialCounter: CounterType[]) => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedTasks.length > 0) {
      for (const task of savedTasks) {
        if (task.state === "created") {
          updateCounterByKey(initialCounter, "remaining");
        } else {
          updateCounterByKey(initialCounter, task.state);
        }

        updateCounterByKey(initialCounter, "created");
      }
    }
    return [...initialCounter];
  };

  const [counter, setCounter] = useState<CounterType[]>(
    initCounter(stateCounter)
  );

  const initTasks = () => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  };

  const [tasks, setTasks] = useState<ITask[]>(initTasks);
  const [activeTask, setActiveTask] = useState<ITask>();

  const addTask = () => {
    const taskId = crypto.randomUUID();
    const newTask: ITask = {
      id: taskId,
      createdAt: new Date(),
      title: `task ${taskId.split("-")[0]}`,
      active: true,
      state: "created",
      text: "",
      tags: [],
    };
    const previousTasks = tasks.map((t) => {
      t.active = false;
      return t;
    });
    setActiveTask(newTask);
    setTasks([newTask, ...previousTasks]);
    setCounter(updateCounterByKey(counter, "created"));
    setCounter(updateCounterByKey(counter, "remaining"));
  };

  const markAsCompleteTask = (taskId: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.state = "completed";
      }
      return t;
    });
    setTasks([...updatedTasks]);
    setCounter(updateCounterByKey(counter, "remaining", -1));
    setCounter(updateCounterByKey(counter, "completed"));
  };

  const markAsDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === taskId) {
        t.state = "deleted";
      }
      return t;
    });
    setTasks([...updatedTasks]);
    setCounter(updateCounterByKey(counter, "deleted"));
    setCounter(updateCounterByKey(counter, "remaining", -1));
  };

  const handleClickOnTask = (e: Event): void => {
    const element = e.target as HTMLElement;
    const taskId = element.id
      ? element.id
      : (element.parentNode?.parentNode as HTMLElement).id;
    const newActiveTask = tasks.find((t) => t.id === taskId);
    setActiveTask(newActiveTask);
  };

  const handleChangeTitle = (e: Event) => {
    if (activeTask) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeTask.id) {
          return {
            ...t,
            title: (e.target as HTMLInputElement).value,
          };
        }
        return t;
      });
      setTasks([...updatedTasks]);
      setActiveTask({
        ...activeTask,
        title: (e.target as HTMLInputElement).value,
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

  const handleChangeDescription = (e: Event) => {
    if (activeTask) {
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeTask.id) {
          return {
            ...t,
            text: (e.target as HTMLInputElement).value,
          };
        }
        return {
          ...t,
        };
      });
      setTasks([...updatedTasks]);
      setActiveTask({
        ...activeTask,
        text: (e.target as HTMLInputElement).value,
      });
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const csvExportData = (): csvData => {
    const headers = [
      {
        label: "id",
        key: "id",
      },
      {
        label: "Created At",
        key: "createdAt",
      },
      {
        label: "Title",
        key: "title",
      },
      {
        label: "Active",
        key: "active",
      },
      {
        label: "State",
        key: "state",
      },
      {
        label: "Description",
        key: "text",
      },
      {
        label: "Tags",
        key: "tags",
      },
    ];

    const filename = `todo_${new Date().toLocaleDateString()}.csv`;
    return {
      headers,
      filename,
      data: tasks,
    };
  };

  return (
    <>
      <Menu save={saveToLocalStorage} csvExportData={csvExportData()} />
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
