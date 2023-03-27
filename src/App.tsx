import './App.css';
import Todo from './components/Todo';
import Menu from './components/Menu';
import DataBoxList from './components/DataBox';
import Footer from './components/Footer';
import { useState } from 'react';
import { TaskProps } from './types';


function App() {

  return (
    <>
      <Menu/>
      <DataBoxList />
      <Todo />
      <Footer/>
    </>
    
  );
}

export default App;
