import React from 'react'
import ToDo from './ToDo.js'
import "../App.css"


const List = ({ state, dispatch }) => {

    return (


        <div>

            <h1>Totally Rad To Do List</h1>

            {state.list.map(item =>

                <ToDo
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                />
            )}

        </div>
    )

}

export default List;