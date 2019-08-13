import React from "react";
import { format } from "date-fns";
import { Button, Header, Grid, Icon, Checkbox } from "semantic-ui-react";
import styles from "./Todo.module.scss";
const Todo = ({ task, completeTask, deleteTask, undoTask }) => {
  return (
    <>
      <Grid>
        <Grid.Row columns={5} verticalAlign="middle">
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
          <Grid.Column width={8}>
            <Header
              as="h5"
              className={task.completed ? styles.completedTask : ""}
            >
              {task.task_name}
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
            {!task.completed && (
              <Header as={"h5"} color="red">
                Due {format(task.completed_by, "MM/DD/YYYY")}
              </Header>
            )}
          </Grid.Column>
          <Grid.Column width={1}>
            <Button
              icon
              size="tiny"
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
