import React from 'react'
import Todo from './Todo'
import { list } from '../reducers/reducer'

const TodoList = props => {
    console.log(list)
    return(
        <div>
             <h2>placeholder</h2>
             {list.map(item => (
                 <Todo key={item.id} todo={item} />
             ))}
        </div>
    )
}

export default TodoList