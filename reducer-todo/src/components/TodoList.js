import React from 'react';

import TodoItem from "./TodoItem";
import { checkPropTypes } from 'prop-types';

const TodoList = () => {
    const [todoState, dispatch] = useReducer(TodoReducer)

    return (
        <div>
            {checkPropTypes.groceries.map(item => (
                <TodoItem key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}    
            
        
        </div>
    );
};

export default TodoList;

