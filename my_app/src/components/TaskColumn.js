import React from 'react';
import TaskCard from './TaskCard';
import './Taskcolumn.css';

function TaskColumn({ title, dotColor, tasks }) {
  return (
    <div className='task-column'>
      <div className='top-section'>
        <div className='dot' style={{ backgroundColor: dotColor }}></div>
        <h2 className='task-column-title'>{title}</h2>
        <div className='counter'>{tasks.length}</div>
      </div>
      <div className='horizontal'></div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
}

export default TaskColumn;
