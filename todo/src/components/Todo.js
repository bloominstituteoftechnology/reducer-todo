import React from 'react';
import { List } from 'semantic-ui-react'

const Todo = ({todo, dispatch}) => {

    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        })
    }

    return (
        <List onClick = {toggleCompleted}
             className = {`todo${todo.completed ? 'completed': ''}`}
             style = {{ textDecoration: todo.completed ? 'line-through':''}}>
            <List.Item>
                <List.Icon name = 'arrow right'/>
                <List.Content>{todo.item}</List.Content>
            </List.Item>
        </List>
    )
}

export default Todo;