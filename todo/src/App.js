import React from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoTitle from "./components/TodoTitle";
// import { ThemeProvider } from "@material-ui/styles";
// import theme from "./theme"; --> figure out if you can do this
// import TodoCard from "./components/TodoCard";


function App() {

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <TodoTitle />
        <TodoForm />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
