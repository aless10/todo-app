import './App.css';
import BasicGrid from './components/BasicGrid';
import BasicMenu from './components/Menu';
import DataBoxList from './components/DataBox';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BasicMenu/>
      <DataBoxList/>
      <BasicGrid/>
      <Footer/>
    </>
    
  );
}

export default App;
