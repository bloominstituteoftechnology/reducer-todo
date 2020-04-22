import React, {useState} from 'react'
import { Button, Form, Input } from "semantic-ui-react";

function ItemForm({addItem, listData}) {
    const [todoItem, setTodoItem] = useState({
        userEntry:""
    })
    console.log("listData", listData.itemData)
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

    const propsOjbectLenth = Object.keys(listData.itemData).length
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
                <p className={"itemCheckPopUp"}>Click Item to Check off of List</p>
            )}
            <Button type="submit" color="blue"><i>EnterItem</i></Button>
        </Form>
    )
}


export default ItemForm;