import React from "react";
import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import CreatePostModalWindow from "./CreatePostModalWindow";

uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  function addTodo(todo, description) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, desc: description, completed: false, isEditing: false },
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <>
      <div className={`todo-wrapper ${modal ? "blurred" : ""}`}>
        <h1>Find Tools Nearby!</h1>
        <TodoForm addTodo={addTodo} modal={modal} setModal={setModal} />
        <div className="feed-container">
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
              <Todo
                desc={todo.desc}
                task={todo}
                key={todo.id}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
        {todos.length > 0 && (
          <button className="clear-all-btn" onClick={() => clearTodos()}>
            Clear All
          </button>
        )}
      </div>
      {modal && <CreatePostModalWindow
        setModal={setModal}
        addTodo={addTodo} />}
    </>
  );
}

export default TodoWrapper;
