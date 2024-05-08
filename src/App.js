import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import CounterComponent from "./components/counterComponent";

const App = () => {
  return (
    <div className= "todo-container">
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="Study"/>
      <TodoItem text="Play"/>
      <TodoItem text="Sleep"/>
      <CounterComponent />
    </div>
  );
};

export default App;
