import React from 'react';
import TodoContainer from './components/TodoContainer'
import styled from 'styled-components'

const StyledApp = styled.div `

  padding: 2% 9%;
  
`
function App() {

  return (

    <StyledApp>

      <TodoContainer />

    </StyledApp>

  );

}

export default App;
