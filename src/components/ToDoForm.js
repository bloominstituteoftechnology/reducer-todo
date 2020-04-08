import React from "react";
export default class ToDoForm extends React.Component {
  state = {
    name: "",
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };
  handleSubmit = (event) => {
    this.props.dispatch({name: "ADD_ITEM", payload:this.state.name});
    this.handleReset();
    event.preventDefault();
  };
  handleReset = () => {
      this.setState({name: ""});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <label>
          {"Add a new item: "}
          <input onChange={this.handleChange} value={this.state.name}></input>
        </label>
        <input type="submit" />
        <input type="reset" />
      </form>
    );
  }
}
