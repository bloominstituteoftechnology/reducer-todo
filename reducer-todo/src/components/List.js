import React from "react"
// import Item from './item'

const List = ({ state, dispatch}) => {

    return (
        <div>
            {state.items.map(item => (
                <div className="item" key={item.id}>
                    <h3>{item.name} </h3>   
                    <button className="completed" onClick={() => {
                        dispatch({type: 'TOGGLE_COMPLETED', payload: `${item.id}`})
                    }}>
                        Completed
                    </button>
                </div>
            ))}
        </div>
    )
}

export default List