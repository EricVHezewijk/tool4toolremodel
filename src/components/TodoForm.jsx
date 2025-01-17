import { useState } from "react";
import React from "react";

function TodoForm({ addTodo, modal, setModal }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);

    setValue("");
  }

  function openCreatePostModal() {
    setModal(true);
  }

  function closeCreatePostModal() {
    setModal(false);
  }

  return (
    <div className="header-container">
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Search tools"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <button 
      className="create-post-btn"
      onClick={openCreatePostModal}>
        Create Post
      </button>
    </div>
  );
}

export default TodoForm;
