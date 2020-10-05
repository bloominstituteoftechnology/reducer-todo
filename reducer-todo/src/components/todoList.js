import React from 'react';
import { TodoItem } from './todoItem';

export const TodoList = props => {
    console.log(props)

    return (
        <div>
            {props.state.map(item => {
                return (
                    <>
                        <TodoItem toggleCompleted={props.toggleCompleted} item={item} />
                    </>
                )
            })}
        </div>
    )
} 