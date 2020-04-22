import React from "react";
import { Container, Header } from "semantic-ui-react";
//components:
import ItemForm from "./ItemForm";
import TodoItem from './TodoItem'

function TodoWrapper({addItem, toggleItem, listData, deleteAll}) {
    const objectLength = Object.keys(listData).length
  return (
    <Container>
      <Header>To Do List!</Header>
      <ItemForm addItem={addItem} listData={listData}/>
      {
          listData.itemData.map((item) => {
              return (
                  <TodoItem data={item} key={item.id} toggleItem={toggleItem} />
              )
          })
      }
     {/* {
         objectLength > 0 && <
     } */}
    </Container>
  );
}

export default TodoWrapper;
