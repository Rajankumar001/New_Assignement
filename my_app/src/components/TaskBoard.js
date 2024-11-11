import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import TaskColumn from './TaskColumn';
import './TaskBoard.css';

function TaskBoard() {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((response) => {
        const data = response.data;
        setToDoTasks(data.filter(task => task.status === 'ToDo'));
        setInProgressTasks(data.filter(task => task.status === 'OnProgress'));
        setCompletedTasks(data.filter(task => task.status === 'Completed'));
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="task-board">
      <TaskColumn title="To Do" dotColor="#5030E5" tasks={toDoTasks} />
      <TaskColumn title="On progress" dotColor="#FFA500" tasks={inProgressTasks} />
      <TaskColumn title="Completed" dotColor="#76A5EA" tasks={completedTasks} />
    </div>
  );
}

export default TaskBoard;
