import React from "react";
import { Button, Header, Grid, Icon, Checkbox } from "semantic-ui-react";
import styles from "./Todo.module.scss";
const Todo = ({ task, completeTask, deleteTask, undoTask }) => {
  return (
    <>
      <Grid>
        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column width={1}>
            <Checkbox
              checked={task.completed}
              onChange={() => completeTask(task.id)}
            />
          </Grid.Column>
          <Grid.Column width={2}>
            {task.completed && (
              <Button icon size="tiny" onClick={() => undoTask(task.id)}>
                <Icon name="undo"></Icon>
              </Button>
            )}
          </Grid.Column>
          <Grid.Column width={9}>
            <Header
              as="h5"
              className={task.completed ? styles.completedTask : ""}
            >
              {task.task_name}
            </Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button
              icon
              size="small"
              basic
              color="red"
              onClick={() => deleteTask(task.id)}
            >
              <Icon name="trash" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default Todo;
