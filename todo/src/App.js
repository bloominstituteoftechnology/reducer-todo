import React, {useReducer}from 'react'
import reducer, {initialState} from './reducers/todoReducer'
import {setAddTask}from './actions/action'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import styled from 'styled-components'
import BackgroundImg from './images/paperImg.png'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

 

  return (
    <Background className="App">
      <Container>
      <Header>To Do App</Header>
       <TodoForm  state = {state} dispatch = {dispatch}/>
     </Container>
     <TodoList state = {state} dispatch = {dispatch}/>
    </Background>
  );
}


const Background = styled.div`
  border: 1px solid #000;
  background-image: url(${BackgroundImg});
  width: 100%;
  height: 150vh;
`

const Header = styled.h1`
  margin-right:43%;
  display:flex;
  align-items: flex-end;

`
const Container = styled.div`
  display:flex;
  align-items: flex-end;
  margin-left:8%;
  margin-top:12%;
`

export default App;
