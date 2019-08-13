import React, { Component } from "react";
import { Button, Card, Form, Message } from "semantic-ui-react";
import styles from "./TodoForm.module.scss";
export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        id: new Date().getTime(),
        task_name: "",
        completed: false
      },
      errorMessage: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      this.props.newTask(this.state.task);
      this.reset();
    }

    //console.log(this.state.taskName);
  };

  handleInputChange = event => {
    this.setState({
      task: { ...this.state.task, task_name: event.target.value }
    });
    this.setState({ errorMessage: "" });
  };

  reset = () => {
    this.setState({
      task: {
        ...this.state.task,
        id: new Date().getTime(),
        task_name: "",
        completed: false
      }
    });
    this.setState({ errorMessage: "" });
  };

  validate = () => {
    let valid = true;
    const task = this.state.task.task_name;

    if (!task) {
      valid = false;
    }

    if (!valid) {
      this.setState({ errorMessage: "Enter a task name before continue" });
    }

    return valid;
  };
  render() {
    return (
      <Card centered fluid className={styles.toDoFormCard}>
        <Card.Content className={styles.cardHeaderContent}>
          <Card.Header className={styles.cardHeader}>Create Task</Card.Header>
        </Card.Content>
        <Card.Content className={styles.toDoFormContent}>
          <Form onSubmit={this.handleSubmit} className={styles.toDoForm}>
            <Form.Field>
              <label htmlFor="taskName">Task</label>
              <input
                className={styles.taskInput}
                name="taskName"
                placeholder="Name"
                onChange={this.handleInputChange}
                value={this.state.task.task_name}
              ></input>
            </Form.Field>
            {this.state.errorMessage && (
              <Message negative content={this.state.errorMessage} />
            )}
            <Button type="submit" className={styles.createTaskButton}>
              Create
            </Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
