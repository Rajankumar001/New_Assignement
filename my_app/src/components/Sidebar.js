import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';
import first_logo from '../assets/images/image_logo.png';
import second_logo from '../assets/images/image_logo_two.png';
import third_logo from '../assets/images/image_logo_three.png';
import AddTask from './AddTask';

function Sidebar({ onTaskAdded }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [expiredTasks, setExpiredTasks] = useState(0);
  const [activeTasks, setActiveTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      const tasks = response.data;

      // Count tasks based on their status
      const expiredCount = tasks.filter(task => task.status === 'Expired').length;
      const activeCount = tasks.filter(task => task.status === 'OnProgress' || task.status === 'ToDo').length;
      const completedCount = tasks.filter(task => task.status === 'Completed').length;

      setExpiredTasks(expiredCount);
      setActiveTasks(activeCount);
      setCompletedTasks(completedCount);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [onTaskAdded]);

  const handleAddTaskClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    fetchTasks(); // Refresh task counts after adding a task
  };

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar_card_one'>
          <div className='sidebar-task_one'>
            <div className='sidebar-logo-image_one'>
              <img src={first_logo} className='image_logo' alt="Expired Task Icon" />
            </div>
            <p className='sidebar_title'>Expired Task</p>
            <h1>{expiredTasks}</h1>
          </div>
        </div>
        <div className='sidebar_card_two'>
          <div className='sidebar-task_two'>
            <div className='sidebar-logo-image_two'>
              <img src={second_logo} className='image_logo' alt="Active Task Icon" />
            </div>
            <p className='sidebar_title'>All Active Task</p>
            <h1>{activeTasks}</h1>
          </div>
        </div>
        <div className='sidebar_card_three'>
          <div className='sidebar-task_three'>
            <div className='sidebar-logo-image_three'>
              <img src={third_logo} className='image_logo' alt="Completed Task Icon" />
            </div>
            <p className='sidebar_title'>Completed Task</p>
            <h1>{completedTasks}</h1>
          </div>
        </div>
        {/* Add Task Button */}
        <button onClick={handleAddTaskClick} className="add-task-button">
          Add Task
        </button>
      </div>
      {isFormVisible && (
        <AddTask onClose={handleCloseForm} onTaskAdded={fetchTasks} />
      )}
    </>
  );
}

export default Sidebar;
