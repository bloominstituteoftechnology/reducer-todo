import React from 'react';
//import logo from '../logo.svg';
import '../css/index.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoForm />
      <Footer />
    </div>
  );
}

export default App;
