export const Clear = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.done)
    });
  };