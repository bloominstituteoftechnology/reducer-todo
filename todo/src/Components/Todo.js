import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      item:'',id:'',completed:false
    }
  }

    handleClick = () => {
    this.props.dispatch(this.props.todolist.id);
  };

  render(){
    return (
      <>
      <div
        onClick={this.handleClick}
        className={` ${this.props.completed ? " completed" : ""}`}
      >
        <p>{this.props.item}</p>
      </div>
  
        <button className="clear-btn" 
        onClick={!this.props.completed}>
          Edit Todo
        </button>
      </>
     
    );
  }


};

export default Todo;
