import { useState } from "react";
import React from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);

    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Search tools"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="post-btn">
        Create Post
      </button>
    </form>
  );
}

export default TodoForm;
