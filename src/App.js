
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category,setCategory]=useState('Laptop');
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <p>Count value in app.js:{category}</p>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
