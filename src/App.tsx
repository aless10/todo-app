import './App.css';
import Menu from './components/Menu';
import {DataBoxList, CounterType} from './components/DataBox';
import Footer from './components/Footer';
import { useState } from 'react';
import Title from './components/Title';
import { ToDoView } from './components/TodoView';
import { ITask } from './types';


const stateCounter = [
    {
      key: 'created',
      counter: 0
    },
    {
      key: 'completed',
      counter: 0
    },
    {
      key: 'deleted',
      counter: 0
    },
    {
      key: 'remaining',
      counter: 0
    }
]



function App() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [counter, setCounter] = useState<CounterType[]>(stateCounter)
  const [activeTask, setActiveTask] = useState<ITask>()

  const updateCounterByKey = (key: string, increment: number = 1) => {
    return counter.map((c) => {
      let counterValue = c.counter
      if (c.key === key) {
        counterValue += increment
      }
      return {key, counter: counterValue}
    })
  }


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
    setCounter(updateCounterByKey('created'))
  }

  return (
    <>  
      <Menu/>
      <DataBoxList counter={counter}/>
      <Title handleNewTask={addTask}/>
      <ToDoView tasks={tasks} activeTask={activeTask}/>
      <Footer/>
    </>
    
  );
}

export default App;
