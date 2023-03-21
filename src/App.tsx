import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import RecipeReviewCard from './components/Card';
import BasicStack from './components/BasicStack';
import BasicGrid from './components/BasicGrid';
import BasicMenu from './components/Menu';
import DataBoxList from './components/DataBox';

function App() {
  return (
    <>
      <BasicMenu/>
      <DataBoxList/>
      <BasicGrid/>
        <Box/>
        <RecipeReviewCard/>
        <BasicStack/>
        
      
    
    </>
    
  );
}

export default App;
