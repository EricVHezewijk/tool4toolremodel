import React, { useContext } from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import CreatePostModalWindow from "./components/CreatePostModalWindow";

function App() {

  return (
    <div className="App">
      {/* <TodoWrapper /> */}
      <CreatePostModalWindow />
    </div>
  );
}

export default App;
