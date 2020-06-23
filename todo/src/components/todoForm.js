import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addItem(this.state.item);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form handleSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          handleChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
