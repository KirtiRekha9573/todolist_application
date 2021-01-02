import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  return (
    /* Importing TodoForm from TodoForm.js */
    <div className="todo-application">
     <TodoList />
    </div>
  );
}

export default App;
