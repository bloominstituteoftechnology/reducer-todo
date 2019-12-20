import React from 'react'

//components

import { Todo } from './Todo';

export function TodoList(props) {

    return (
        <div>
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
} 