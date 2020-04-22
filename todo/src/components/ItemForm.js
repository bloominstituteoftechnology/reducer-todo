import React, {useState} from 'react'
import { Button, Form, Input } from "semantic-ui-react";

function ItemForm({addItem}) {
    const [todoItem, setTodoItem] = useState({
        userEntry:""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setTodoItem({
            [name]: value
        })

    }

    const handleSubmit = event => {
        event.preventDefault()
        addItem(todoItem.userEntry)
        setTodoItem({userEntry: ""})
    }

    const propsOjbectLenth = Object.keys(addItem).length
    console.log(propsOjbectLenth)
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label />Add Item:
                <Input
                    placeholder="Enter Item"
                    type="text"
                    name="userEntry"
                    onChange={handleChange}
                    value={todoItem.userEntry}
                    style={{marginTop:"10px"}}
                />
            </Form.Field>
            {propsOjbectLenth > 0 && (
                <p>Click Item to Check off of List</p>
            )}
            <Button type="submit" color="blue"><i>EnterItem</i></Button>
        </Form>
    )
}


export default ItemForm;