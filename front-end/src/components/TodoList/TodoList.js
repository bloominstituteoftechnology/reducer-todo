import React from "react";
import { Card, List } from "semantic-ui-react";

import Task from "./Todo";
import styles from "./ToDoList.module.scss";

const ToDoList = ({
  tasks,
  completeToDoTask,
  deleteToDoTask,
  undoCompletedToDoTask
}) => {
  return (
    <>
      <Card centered fluid>
        <Card.Content>
          <Card.Header>To Do</Card.Header>
        </Card.Content>
        <Card.Content>
          {tasks.map(task => (
            <List.Item key={task.id}>
              <Task
                key={task.id}
                task={task}
                completeTask={completeToDoTask}
                deleteTask={deleteToDoTask}
                undoTask={undoCompletedToDoTask}
              />
            </List.Item>
          ))}
        </Card.Content>
      </Card>
    </>
  );
};
export default ToDoList;
