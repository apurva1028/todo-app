
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import './TodoItem.css';
import './AddTodoForm.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
