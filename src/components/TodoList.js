// src/components/TodoList.js
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <TodoInput 
        input={input} 
        setInput={setInput} 
        addTodo={addTodo} 
      />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;