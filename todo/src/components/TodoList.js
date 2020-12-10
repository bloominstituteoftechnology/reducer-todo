import React from "react";
import {markTodoDone,deleteTodo} from '../actions/index';
import {connect} from 'react-redux';

  function TodoList(props) {
     const clickHandle = () => {
        props.markTodoDone();
     }
     const clickDelete = () => {
        props.deleteTodo();
     }
     
     console.log(props.todo)
  return (
      <div>
          <p onClick={clickHandle}>{props.item.name}</p>
          <button onClick={clickDelete}>Delete</button>
      </div>
  )
}
const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps,{markTodoDone,deleteTodo})(TodoList)

