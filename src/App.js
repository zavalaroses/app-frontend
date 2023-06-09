import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowEmployees from './components/ShowEmployees';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowEmployees/>} />
          <Route path='/create' element={ <CreateEmployee/>} />
          <Route path='/edit/:id' element={ <EditEmployee/>} />
        </Routes>
      </BrowserRouter>        
    </div>
  );
}

export default App;
