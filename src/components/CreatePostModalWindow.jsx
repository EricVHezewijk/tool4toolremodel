import React from "react";
import { useState } from "react";

function CreatePostModalWindow({ setModal, addTodo }) {

  const [toolName, setToolName] = useState('');
  const [toolDesc, setToolDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    addTodo(toolName, toolDesc);
    setModal(false);
  }


  return (
    <div className="create-post-modal-window-container">
      <div className="create-post-modal-window-header">
        <h2 className="create-post-modal-window-header-text">Request A Tool</h2>
        <button className="close-post-modal-window-btn" onClick={() => setModal(false)}>
          X
        </button>
      </div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h4>Tool</h4>
        <input
          className="create-post-input"
          type="text"
          placeholder="Enter needed tool"
          value={toolName}
          onChange={(e) => setToolName(e.target.value)}
        />
        <h4>Description</h4>
        <input
          className="create-post-input"
          type="textarea"
          placeholder="Enter text"
          value={toolDesc}
          onChange={(e) => setToolDesc(e.target.value)}
        />
        <h4>Duration (days)</h4>
        <input className="create-post-input" type="number" />
        <button className="submit-create-post-button">
          <p>Post</p>
        </button>
      </form>
    </div>
  );
}

export default CreatePostModalWindow;
