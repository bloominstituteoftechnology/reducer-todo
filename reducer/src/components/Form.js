import React from 'react';

export default function Form(props){
    const {newItemItext, updateNewTextValue, createNewTodo} = props;


    return (
        <div>
            <input value={newItemItext} onChange={updateNewTextValue}/>
            <button onClick={createNewTodo}>Add</button>
        </div>
    );
}