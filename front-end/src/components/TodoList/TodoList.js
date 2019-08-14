import React from "react";
import { Button, Card, Grid, List } from "semantic-ui-react";

import Task from "./Todo";
// import styles from "./ToDoList.module.scss";

const ToDoList = ({
  tasks,
  completeToDoTask,
  deleteToDoTask,
  undoCompletedToDoTask,
  deleteCompletedToDoTask
}) => {
  return (
    <>
      <Card centered fluid>
        <Card.Content>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column>
                <Card.Header as="h3">To Do</Card.Header>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Button onClick={deleteCompletedToDoTask}>
                  Remove Completed
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
