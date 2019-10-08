import React from 'react'

const Item = ({state}) => {

    return (
        <div className="item">
             <h3>{state.name} </h3>   
             
        </div>
    )
}

export default Item