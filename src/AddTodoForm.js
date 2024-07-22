
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Your Task"
      />
      <button type="submit">Add Your Task For The Day</button>
    </form>
  );
};

export default AddTodoForm;
