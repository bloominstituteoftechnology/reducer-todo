import React from 'react';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  props;

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
        <div onDoubleClick={(e) => {this.props.setCompleted(this.props.task.id)}}>
          <p>{this.props.task.item}{this.completed}</p>
      </div>
    );
  }
}

export default Todo;