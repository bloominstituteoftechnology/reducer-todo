import React from 'react'
import { List } from "semantic-ui-react";

function TodoItem({data, toggleItem}){
    return(
        <List size="big">
            <List.Item
             className={`${data.completed ? "checkedOff" : ""}`}
             onClick={() => {
                 toggleItem(data.id)
             }}
            >
            {data.item}
            </List.Item>
        </List>
    )
}

export default TodoItem