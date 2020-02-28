import React from "react";
import { connect } from "react-redux";
import { addItem } from "../Execute/TodoExecute";

class TodoList extends React.Component {
  state = {
    newItem: ""
  };

  handleChanges = e => {
    this.setState({ newItem: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">
          {this.props.items.map((item, id) => (
            <h4 key={id}>
              {item.todo}
              {item.completed}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newItem}
          onChange={this.handleChanges}
          placeholder="Add new Todo"
        />
        <button onClick={() => this.props.addItem(this.state.newItem)}>
          Add Todo
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps in TodoList", state);
  return {
    items: ""
  };
};

export default connect(mapStateToProps, { addItem })(TodoList);
