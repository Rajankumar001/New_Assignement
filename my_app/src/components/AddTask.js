// src/components/AddTaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';

function AddTaskForm({ onClose, onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      priority,
      status,
      deadline,
    };

    try {
      await axios.post('http://localhost:5000/api/tasks', newTask);
      onTaskAdded(); 
      onClose(); 
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="add-task-overlay">
      <div className="add-task-form">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Add New Task</h2>
        <form onSubmit={ handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <label>
            priority:
            <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="">Select Status</option>
              <option value="ToDo">ToDo</option>
              <option value="OnProgress">OnProgress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <label>
            Deadline:
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
          </label>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
