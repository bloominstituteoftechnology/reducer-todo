import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <hr />
      <Form />
      <ListItems />
    </div>
  );
}

export default App;
