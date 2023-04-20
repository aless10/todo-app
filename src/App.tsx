import './App.css';
import Menu from './components/Menu';
import DataBoxList from './components/DataBox';
import Footer from './components/Footer';
import { useState } from 'react';
import Title from './components/Title';
import { ToDoView } from './components/TodoView';
import { ITask } from './types';



function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [activeTask, setActiveTask] = useState<ITask>()

  const addTask = () => {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      title: 'newTask',
      active: true,
      state: 'created'
    }
    const previousTasks = tasks.map(t => {
      t.active = true
      return t
    })
    setActiveTask(newTask)
    setTasks([newTask, ...previousTasks])
  }


  return (
    <>  
      <Menu/>
      <DataBoxList />
      <Title handleNewTask={addTask}/>
      <ToDoView tasks={tasks} activeTask={activeTask}/>
      <Footer/>
    </>
    
  );
}

export default App;
