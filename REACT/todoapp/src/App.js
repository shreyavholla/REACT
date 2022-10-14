import './App.css';
import React,{ lazy, Suspense } from 'react';
import Todos from './components/Todos';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/todos" element={<Todos />} />
      <Route path="/" element={<Todos />} />
      <Route path="*" element={<Todos />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
