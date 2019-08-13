import React, { Component } from "react";
import { format } from "date-fns";
import { Button, Card, Form, Message } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import styles from "./TodoForm.module.scss";
export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        id: new Date().getTime(),
        task_name: "",
        completed: false,
        completed_by: ""
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
  };

  handleInputChange = event => {
    this.setState({
      task: { ...this.state.task, task_name: event.target.value }
    });
    this.setState({ errorMessage: "" });
  };

  handleDueDateChange = (event, { name, value }) => {
    this.setState({
      task: { ...this.state.task, [name]: value }
    });
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
            <Form.Group widths="equal">
              <Form.Field>
                <input
                  className={styles.taskInput}
                  name="taskName"
                  placeholder="Task Name"
                  onChange={this.handleInputChange}
                  value={this.state.task.task_name}
                ></input>
              </Form.Field>
              {this.state.errorMessage && (
                <Message negative content={this.state.errorMessage} />
              )}
              <Form.Field>
                <DateInput
                  dateFormat="YYYY-MM-DD"
                  iconPosition="left"
                  inline
                  name="completed_by"
                  minDate={format(new Date(), "YYYY-MM-DD")}
                  onChange={this.handleDueDateChange}
                  placeholder="Due Date"
                  value={this.state.task.completed_by}
                />
              </Form.Field>
            </Form.Group>

            <Button type="submit" className={styles.createTaskButton}>
              Create
            </Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}
