import React from 'react';

function TodoRow (props){
    const {toggleTodo, item} = props;

    return(
        <tr key={item.action}>
        <td>{item.action}</td>
        <td>
            <input type="checkbox" checked={item.done} onChange={ () => toggleTodo(item)} /> 
        </td>
    </tr>
    )
}

export default TodoRow;