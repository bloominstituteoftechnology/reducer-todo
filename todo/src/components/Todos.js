
import React, {useState, useReducer, useEffect} from 'react';
import {FormGroup, Label, Input} from 'reactstrap';



const Todo = (props) => {
    return (
        <div>
            <FormGroup check onChange={() => props.dispatch({type: 'toggle', id: props.todo.id})}>
                <Label check>
                    <Input type="checkbox" id={props.todo.id} className='todo'/>{' '}
                    {props.todo.completed === false && props.todo.task}
                    {props.todo.completed === true && <span className='completed'>{props.todo.task}</span>}
                </Label>
            </FormGroup>
        </div>


    )

}

export default Todo;