import './App.css';
import Todo from './components/Todo';
import Menu from './components/Menu';
import DataBoxList from './components/DataBox';
import Footer from './components/Footer';
import { useState } from 'react';
import Title from './components/Title';
import { ToDoView } from './components/TodoView';



function App() {

  const addTask = () => {
    console.log('Clicked')
  }

  return (
    <>  
      <Menu/>
      <DataBoxList />
      <Title handleNewTask={addTask}/>
      <ToDoView tasks={[]} />
      <Footer/>
    </>
    
  );
}

export default App;
