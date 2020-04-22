import React from "react";
import { Container, Header } from "semantic-ui-react";
//components:
import ItemForm from "./ItemForm";
import ToListItems from './ItemForm'

function TodoWrapper({addItem}) {
  return (
    <Container>
      <Header>To Do List!</Header>
      <ItemForm addItem={addItem}/>
    </Container>
  );
}

export default TodoWrapper;
