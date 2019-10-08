import React from "react"
// import Item from './item'

const List = ({ state}) => {

    return (
        <div>
            {state.items.map(item => (
                <div className="item" key={item.id}>
                    <h3>{item.name} </h3>   
                
                </div>
            ))}
        </div>
    )
}

export default List