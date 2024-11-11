const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'], 
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['ToDo', 'OnProgress', 'Completed'], 
    required: true,
    default: 'ToDo', 
  },
});

module.exports = mongoose.model('Task', taskSchema);
