import React from 'react'
import TodoItems from './components/TodoItems'
import styled from 'styled-components'

const StyledApp = styled.div`
  text-align: center;
  background-color: #333;
  color: white;
  height: 100vh;
  padding: 5%;
  font-size: 1.5rem;
`

function App() {
  return (
    <StyledApp className="App">
      <TodoItems />
    </StyledApp>
  );
}

export default App;
