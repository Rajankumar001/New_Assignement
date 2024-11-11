import React from 'react';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import icon from './assets/images/icons .png';
import filter from './assets/images/filter.png';
import drop_down from './assets/images/arrow-down.png'
import './App.css';

function App() {
  return (
  <div className='home'>
    <div className='search'>
      <div className='left-search'>
        <div className='search-icon'>
          <img src={icon}></img>
        </div>
        <p className='search-detail'>Search Project</p>
      </div>
      <div className='filter'>
        <img src={filter}></img>
        <p>Filter</p>
        <img src={drop_down}></img>
      </div>
    </div>
    <div className="app">
      <Sidebar />
      <TaskBoard />
    </div>
    </div>
  );
}

export default App;
