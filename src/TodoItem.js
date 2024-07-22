
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={handleToggle}>{todo.text}</span>
      <button onClick={handleDelete}>Remove This</button>
    </li>
  );
};

export default TodoItem;
