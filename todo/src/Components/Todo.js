import React from 'react';
import './Todo.css';
import {connect} from 'react-redux';
import {markTodo , clearTodo} from '../actions/actions';

const Todo = (props) => {
    const completed = (e) => {
        props.markTodo(e.target.id)
    }
    const clear = (e) => {
        props.clearTodo(e.target.id)
    }
    return(
        <div onClick={completed} className='clickable'>
            
            <h2>{props.item.name}</h2>
            <button onClick={clear}>Clear Todos</button>
        </div>
    )
}
const mapStateToProps = state => {
    return ({
        todos: state.todos,
    })
}
export default connect(mapStateToProps, {markTodo, clearTodo})(Todo)