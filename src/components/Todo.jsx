import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="Todo">
      <div className="image-container">
          <img src="/hammer.png"></img>
      </div>

      <div className="post-info-container">
        <h3 className="post-title">
          {task.task}
        </h3>
        <div className="post-text">
          {task.desc}
        </div>


        <div className="icon-container">
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
            className="edit-icon"
          />
          <FontAwesomeIcon  
            className="delete-icon" icon={faTrash} 
            onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
      
    </div>
  );
}

export default Todo;
