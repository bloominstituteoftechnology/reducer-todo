import React, {useState} from "react"

const Form = (props) => {

    const [itemName, setItemName] = useState()

    const handleChanges = (e) => {

        setItemName(e.target.value)
        console.log(itemName)
    }

    return (
        <div>
            <input 
            type="text"
            name="item"
            value={itemName}
            onChange={handleChanges}
            />
            <button onClick={() => {
                props.dispatch({type: "addItem", payload:itemName})
                setItemName("")
            }}>+</button>
        </div>
    )
}

export default Form