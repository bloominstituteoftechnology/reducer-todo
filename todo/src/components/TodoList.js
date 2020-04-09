import React from "react";
import { initialTodo, todoReducer } from "../reducers/todoReducer";
import { useReducer } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const TodoList = (props) => {
  //console.log("TodoList.js  toDoState -->", props.todoState);

  return (
    <>
      <ListGroup
        style={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "coloumn",
        }}
      >
        {props.todoState.map((toDO) => {
          if (toDO.item === "") {
            return null;
          } else {
            return (
              <ListGroupItem
                style={{
                  boxShadow:
                    "0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24)",
                  width: "100%",
                  maxWidth: "250px",
                  padding: "10px",
                  margin: "16px auto",
                  textAlign: "center",
                }}
                className={toDO.completed ? "trueTodo" : "falseTodo"}
                color={toDO.completed ? "danger" : "success"}
                onClick={() => props.handleCompleted(toDO.id)}
                key={toDO.id}
              >
                {toDO.item}
              </ListGroupItem>
            );
          }
        })}
      </ListGroup>
    </>
  );
};

export default TodoList;
