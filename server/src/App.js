import React from 'react';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import './App.css';

function App() {
  return (
  <div className='home'>
    <div className='search'>
      
    </div>
    <div className="app">
      <Sidebar />
      <TaskBoard />
    </div>
    </div>
  );
}

export default App;
