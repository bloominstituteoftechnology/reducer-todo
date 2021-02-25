import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <AppBar
        className="app-bar"
        position="sticky"
        style={{
          boxShadow: "0 0 1.5rem black",
          backgroundColor: 'orangered',
          color: "white",
          opacity: '0.9'
        }}
      >
        <Toolbar color="inherit">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DehazeIcon />
          </IconButton>
          <h1>Pop Todo!</h1>
        </Toolbar>
      </AppBar>
      <TodoForm />
    </div>
  );
}

export default App;
