import React from "react"

const Item = (props) => {

    return (
        <div>
            <p 
                className={props.item.completed ? "completed": ""}
                onClick={() => {
                    props.dispatch({type: "toggleCompleteness", payload:props.item.id})
                    console.log(props.item.id)
                }
            }>
                {props.item.item}
            </p>
        </div>
    )
}

export default Item