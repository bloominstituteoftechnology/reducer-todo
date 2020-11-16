import React from "react";

import Todo2 from "./Todo2";

const Todo2 = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  
  const todolist = [
    {
      item: 'Edit Individual Todos',
      id: 1528817077286,
      completed: false
    },
    {
      item: 'Brush Teeth',
      id: 1528817084358,
      completed: false
    }
  ];
  
  
  return (
    <div className="shopping-list">
      {props.todolist.map((item) => (
        <Todo
          key={item.id}
          item={item}
          toggleDone={props.toggleDone}
          clearTodos={props.clearTodos}
        />
      ))}
      <button onClick={props.clearTodos}className="clear-btn" >
          Clear All Finished Todos
        </button>

    </div>
  );
};

export default Todo2;
