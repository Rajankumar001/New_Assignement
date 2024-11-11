import React from 'react';
import './TaskCard.css';

function TaskCard({ title, priority, description, deadline }) {
  return (
    <div className='TaskCard'>
      <div className='rate'>{priority}</div>
      <div className='Task-title'>{title}</div>
      <div className='Task-description'>{description}</div>
      <div className='Task-deadline'>{deadline}</div>
    </div>
  );
}

export default TaskCard;
