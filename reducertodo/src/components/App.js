import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'
import './App.css';

const App = () => (
  <div>
    <Title />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App