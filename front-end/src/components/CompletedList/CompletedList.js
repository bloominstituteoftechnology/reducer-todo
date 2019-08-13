import React, { Component } from "react";
import { Button, Card, Header, Icon, Grid, List } from "semantic-ui-react";
import Completed from "./Completed";

import styles from "./CompletedList.module.scss";

export default class CompletedList extends Component {
  render() {
    return (
      <Card centered fluid className={styles.toDoListCard}>
        <Card.Content className={styles.cardHeaderContent}>
          <Grid columns={2}>
            <Grid.Column>
              <Header className={styles.cardHeader}>Completed</Header>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Button
                basic
                icon
                inverted
                onClick={this.props.removeAllCompletedTasks}
                size="small"
              >
                <Icon name="trash"></Icon>
              </Button>
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content>
          <List divided>
            {this.props.completedTasks.map((task, index) => (
              <Completed
                taskName={task.name}
                taskIndex={index}
                undoCompletedTask={this.props.undoCompletedTask}
                key={index}
              />
            ))}
          </List>
        </Card.Content>
      </Card>
    );
  }
}
