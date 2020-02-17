import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from './Title'
import './App.css';
import styled from 'styled-components';

const Wrapperdiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const App = () => (
  <div>
    <Title />
    <Wrapperdiv>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </Wrapperdiv>
  </div>
)
export default App